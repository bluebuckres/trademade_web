import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
  signOut,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
  signInWithGoogle: () => Promise<UserCredential>;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (email: string, password: string) => Promise<UserCredential>;
  sendVerificationEmail: () => Promise<void>;
  sendSignInLink: (email: string, redirectUrl: string) => Promise<void>;
  completeSignInWithLink: (email: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!auth) {
      setError(new Error('Firebase Auth not initialized'));
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) throw new Error('Firebase Auth not initialized');
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase Auth not initialized');
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase Auth not initialized');
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sendVerificationEmail = async () => {
    if (!auth?.currentUser) throw new Error('No user signed in');
    return sendEmailVerification(auth.currentUser);
  };

  const sendSignInLink = async (email: string, redirectUrl: string) => {
    if (!auth) throw new Error('Firebase Auth not initialized');
    const actionCodeSettings = {
      url: redirectUrl,
      handleCodeInApp: true
    };
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  };

  const completeSignInWithLink = async (email: string) => {
    if (!auth) throw new Error('Firebase Auth not initialized');
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      throw new Error('Invalid sign-in link');
    }
    return signInWithEmailLink(auth, email, window.location.href);
  };

  const logout = async () => {
    if (!auth) throw new Error('Firebase Auth not initialized');
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    error,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    sendVerificationEmail,
    sendSignInLink,
    completeSignInWithLink,
    logout
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
