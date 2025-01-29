import { 
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { UserProfile, UserCredentials, OTPVerificationData, AuthResponse } from '../types/auth';

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Create or update user profile
    const userProfileRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userProfileRef);

    if (!userSnapshot.exists()) {
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'user'
      };
      await setDoc(userProfileRef, userProfile);
    }

    return {
      success: true,
      message: 'Successfully signed in with Google',
      data: { user: userSnapshot.data() as UserProfile }
    };
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return {
      success: false,
      message: 'Failed to sign in with Google'
    };
  }
};

export const signInWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // Get user profile
    const userProfileRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userProfileRef);

    if (!userSnapshot.exists()) {
      throw new Error('User profile not found');
    }

    return {
      success: true,
      message: 'Successfully signed in',
      data: { user: userSnapshot.data() as UserProfile }
    };
  } catch (error) {
    console.error('Error signing in with email:', error);
    return {
      success: false,
      message: 'Failed to sign in with email and password'
    };
  }
};

export const logoutUser = async (): Promise<AuthResponse> => {
  try {
    await firebaseSignOut(auth);
    return {
      success: true,
      message: 'Successfully logged out'
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to logout'
    };
  }
};

export const verifyOTP = async ({ otp, uid }: { otp: string; uid: string }): Promise<AuthResponse> => {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      return {
        success: false,
        message: 'User not found'
      };
    }

    // In a real application, you would verify the OTP against a stored value
    // For now, we'll just update the user's profile
    await updateDoc(userRef, {
      phoneVerified: true,
      updatedAt: new Date()
    });

    return {
      success: true,
      message: 'OTP verified successfully',
      data: { user: userDoc.data() as UserProfile }
    };
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return {
      success: false,
      message: 'Failed to verify OTP'
    };
  }
};

export const getUserProfile = async (uid: string): Promise<UserProfile> => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (!userDoc.exists()) {
    throw new Error('User profile not found');
  }
  return userDoc.data() as UserProfile;
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
): Promise<AuthResponse> => {
  try {
    const userProfileRef = doc(db, 'users', uid);
    await updateDoc(userProfileRef, {
      ...updates,
      updatedAt: new Date()
    });

    const updatedProfile = await getUserProfile(uid);

    return {
      success: true,
      message: 'Profile updated successfully',
      data: { user: updatedProfile }
    };
  } catch (error) {
    console.error('Error updating profile:', error);
    return {
      success: false,
      message: 'Failed to update profile'
    };
  }
};
