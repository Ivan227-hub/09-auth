'use client';

import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/store/authStore';
import { checkSession } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { setUser, clearIsAuthenticated, isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await checkSession();
      if (user) setUser(user);
      else clearIsAuthenticated();
      setLoading(false);
    };
    checkAuth();
  }, [setUser, clearIsAuthenticated]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default AuthProvider;
