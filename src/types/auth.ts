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
  emailVerified: boolean;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
  location?: {
    city?: string;
    region?: string;
    country?: string;
    ip?: string;
  };
  createdAt: Date;
  lastLoginAt: Date;
  provider: 'google' | 'email';
}

export interface ProfileCompletionData {
  displayName: string;
  phoneNumber: string;
  password?: string;
  confirmPassword?: string;
}

export interface OTPVerificationData {
  email: string;
  otp: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  data?: {
    user?: UserProfile;
    token?: string;
  };
}
