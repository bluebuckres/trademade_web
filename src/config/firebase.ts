import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { env } from './env';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

try {
  const firebaseConfig = {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID
  };

  // Debug: Log the config (remove in production)
  console.log('Firebase Config:', {
    apiKey: firebaseConfig.apiKey ? 'exists' : 'missing',
    authDomain: firebaseConfig.authDomain ? 'exists' : 'missing',
    projectId: firebaseConfig.projectId ? 'exists' : 'missing',
    storageBucket: firebaseConfig.storageBucket ? 'exists' : 'missing',
    messagingSenderId: firebaseConfig.messagingSenderId ? 'exists' : 'missing',
    appId: firebaseConfig.appId ? 'exists' : 'missing',
    measurementId: firebaseConfig.measurementId ? 'exists' : 'missing'
  });

  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Analytics failed to initialize:', error);
  }
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
}

export { app, auth, db, analytics };
