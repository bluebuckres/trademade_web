// Mock Firebase configuration
import { Auth, User } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

// Mock auth object
const mockAuth = {
  currentUser: null,
  onAuthStateChanged: (callback: (user: User | null) => void) => {
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: () => Promise.resolve({ user: null }),
  createUserWithEmailAndPassword: () => Promise.resolve({ user: null }),
  signOut: () => Promise.resolve()
} as unknown as Auth;

// Mock firestore object
const mockDb = {} as Firestore;

export const auth = mockAuth;
export const db = mockDb;
export const getUserProfile = () => Promise.resolve(null);
