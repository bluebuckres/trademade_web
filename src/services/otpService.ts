import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const OTP_COLLECTION = 'otps';
const OTP_EXPIRY_MINUTES = 10;

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const saveOTP = async (userId: string, email: string): Promise<string> => {
  const otp = generateOTP();
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + OTP_EXPIRY_MINUTES);

  await setDoc(doc(db, OTP_COLLECTION, userId), {
    otp,
    email,
    expiresAt,
    createdAt: new Date()
  });

  return otp;
};

export const verifyOTP = async (userId: string, inputOTP: string): Promise<boolean> => {
  const otpDoc = await getDoc(doc(db, OTP_COLLECTION, userId));
  
  if (!otpDoc.exists()) {
    throw new Error('OTP not found');
  }

  const otpData = otpDoc.data();
  const now = new Date();
  const expiresAt = otpData.expiresAt.toDate();

  if (now > expiresAt) {
    await deleteOTP(userId);
    throw new Error('OTP has expired');
  }

  if (otpData.otp !== inputOTP) {
    throw new Error('Invalid OTP');
  }

  await deleteOTP(userId);
  return true;
};

export const deleteOTP = async (userId: string): Promise<void> => {
  await deleteDoc(doc(db, OTP_COLLECTION, userId));
};

// Function to send OTP via email
export const sendOTPEmail = async (email: string, otp: string): Promise<void> => {
  // TODO: Implement email sending logic using Firebase Cloud Functions
  // For now, we'll just log it
  console.log(`Sending OTP ${otp} to ${email}`);
  
  // In production, you would:
  // 1. Create a Firebase Cloud Function
  // 2. Use a service like SendGrid or Nodemailer
  // 3. Send a properly formatted email with the OTP
};
