import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { UserCredentials, AuthResponse, OTPVerification, UserProfile } from '../types/auth';
import { generateUserId } from '../utils/userIdGenerator';

const googleProvider = new GoogleAuthProvider();

// Create user profile in Firestore
const createUserProfile = async (
  uid: string,
  data: Omit<UserProfile, 'uid' | 'userId' | 'createdAt' | 'updatedAt'>
): Promise<UserProfile> => {
  const userId = generateUserId(data.name);
  const timestamp = serverTimestamp();
  
  const userProfile: Omit<UserProfile, 'createdAt' | 'updatedAt'> & { createdAt: any; updatedAt: any } = {
    uid,
    userId,
    ...data,
    createdAt: timestamp,
    updatedAt: timestamp
  };

  await setDoc(doc(db, 'users', uid), userProfile);
  
  return {
    ...userProfile,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

// Register new user with email
export const registerUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  try {
    if (!credentials.password) {
      throw new Error('Password is required for email registration');
    }

    const { user } = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );

    // Create user profile
    const userProfile = await createUserProfile(user.uid, {
      email: credentials.email,
      mobileNumber: credentials.mobileNumber,
      name: credentials.name,
      emailVerified: user.emailVerified,
      mobileVerified: false,
      authProvider: 'email'
    });

    // Generate OTP for mobile verification
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await setDoc(doc(db, 'otps', credentials.mobileNumber), {
      otp,
      uid: user.uid,
      createdAt: serverTimestamp(),
      verified: false
    });

    return {
      success: true,
      message: 'Registration successful',
      data: {
        user: userProfile
      }
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Sign in with Google
export const signInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Check if user exists
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    
    if (!userDoc.exists()) {
      // Create new user profile for first-time Google sign-in
      const userProfile = await createUserProfile(user.uid, {
        email: user.email!,
        mobileNumber: '', // Will be collected later
        name: user.displayName || 'User',
        emailVerified: user.emailVerified,
        mobileVerified: false,
        authProvider: 'google'
      });

      return {
        success: true,
        message: 'Google sign-in successful',
        data: {
          user: userProfile
        }
      };
    }

    // Return existing user profile
    const userProfile = userDoc.data() as UserProfile;
    return {
      success: true,
      message: 'Google sign-in successful',
      data: {
        user: userProfile
      }
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Login with email
export const loginUser = async (credentials: Pick<UserCredentials, 'email' | 'password'>): Promise<AuthResponse> => {
  try {
    if (!credentials.password) {
      throw new Error('Password is required for email login');
    }

    const { user } = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      throw new Error('User profile not found');
    }

    const userProfile = userDoc.data() as UserProfile;

    return {
      success: true,
      message: 'Login successful',
      data: {
        user: userProfile
      }
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Verify OTP
export const verifyOTP = async ({ mobileNumber, otp }: OTPVerification): Promise<AuthResponse> => {
  try {
    const otpDoc = await getDoc(doc(db, 'otps', mobileNumber));
    const otpData = otpDoc.data();

    if (!otpData) {
      return {
        success: false,
        message: 'OTP not found'
      };
    }

    if (otpData.otp !== otp) {
      return {
        success: false,
        message: 'Invalid OTP'
      };
    }

    const now = new Date();
    const otpCreatedAt = otpData.createdAt.toDate();
    const diffMinutes = (now.getTime() - otpCreatedAt.getTime()) / 1000 / 60;

    if (diffMinutes > 10) {
      return {
        success: false,
        message: 'OTP expired'
      };
    }

    // Mark mobile as verified
    const userRef = doc(db, 'users', otpData.uid);
    await setDoc(userRef, {
      mobileVerified: true,
      updatedAt: serverTimestamp()
    }, { merge: true });

    // Get updated user profile
    const userDoc = await getDoc(userRef);
    const userProfile = userDoc.data() as UserProfile;

    return {
      success: true,
      message: 'Mobile number verified successfully',
      data: {
        user: userProfile
      }
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Logout
export const logoutUser = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);
    return {
      success: true,
      message: 'Logout successful'
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    };
  }
};
