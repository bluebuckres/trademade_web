import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../config/firebase';
import { getUserRole } from '../api/auth';
import type { UserRole } from '../types/auth';

interface AuthState {
  user: User | null;
  userRole: UserRole | null;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    userRole: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await getUserRole(user.uid);
        setAuthState({
          user,
          userRole: role,
          loading: false,
        });
      } else {
        setAuthState({
          user: null,
          userRole: null,
          loading: false,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return authState;
};

export default useAuth;
