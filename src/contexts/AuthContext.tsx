import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../config/firebase';
import { signInWithGoogle as signInWithGoogleApi, signInWithEmail as signInWithEmailApi, logoutUser } from '../api/auth';
import { AuthContextType, UserProfile } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        try {
          const profile = await getUserProfile(user.uid);
          setUserProfile(profile);
        } catch (err) {
          console.error('Error fetching user profile:', err);
          setError('Error fetching user profile');
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      setError(null);
      const response = await signInWithGoogleApi();
      if (!response.success) {
        throw new Error(response.message);
      }
    } catch (err) {
      console.error('Error signing in with Google:', err);
      setError('Failed to sign in with Google');
      throw err;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setError(null);
      const response = await signInWithEmailApi(email, password);
      if (!response.success) {
        throw new Error(response.message);
      }
    } catch (err) {
      console.error('Error signing in with email:', err);
      setError('Failed to sign in with email');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setUserProfile(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to logout');
    }
  };

  const isEmailLink = (url: string) => {
    return auth.isSignInWithEmailLink(url);
  };

  const completeSignInWithLink = async (email: string, link: string) => {
    try {
      const result = await auth.signInWithEmailLink(email, link);
      if (result.user) {
        setUser(result.user);
        return { success: true, user: result.user };
      }
      throw new Error('Failed to complete email sign in');
    } catch (error) {
      console.error('Error completing email sign in:', error);
      throw error;
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    error,
    signInWithGoogle,
    signInWithEmail,
    logout,
    isEmailLink,
    completeSignInWithLink
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
