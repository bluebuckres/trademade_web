// Temporarily disabled Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Auth, User } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Mock auth object
const mockAuth = {
  currentUser: null,
  onAuthStateChanged: (callback: (user: User | null) => void) => {
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: async () => {
    throw new Error('Firebase authentication is temporarily disabled');
  },
  createUserWithEmailAndPassword: async () => {
    throw new Error('Firebase authentication is temporarily disabled');
  },
  signOut: async () => {},
} as unknown as Auth;

// Mock firestore object
const mockDb = {} as Firestore;

const app = initializeApp(firebaseConfig);
export const auth = mockAuth;
export const db = mockDb;

export default {
  auth: mockAuth,
  db: mockDb,
};
