import { User } from 'firebase/auth';

export type UserRole = 'user' | 'admin';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface GoogleAuthResponse {
  success: boolean;
  data?: {
    user: UserProfile;
    needsProfileCompletion?: boolean;
  };
  message?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  name?: string;
  photoURL?: string;
  phoneVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: 'user' | 'admin';
}

export interface ProfileCompletionData {
  displayName: string;
  phoneNumber: string;
  password?: string;
  confirmPassword?: string;
}

export interface OTPVerificationData {
  otp: string;
  uid: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: UserProfile;
  };
}

export interface UserCredentials {
  email: string;
  password: string;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isEmailLink?: (email: string) => boolean;
  tempUserData?: {
    uid: string;
    email: string;
    displayName?: string;
  };
}
