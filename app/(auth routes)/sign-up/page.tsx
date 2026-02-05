'use client';

import React, { useState } from 'react';
import css from './SignUp.module.css';
import { register } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await register({ email, password });
      setUser(user);
      router.push('/profile');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <main className={css.mainContent}>
      <h1 className={css.formTitle}>Sign up</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </div>
        <p className={css.error}>{error}</p>
      </form>
    </main>
  );
};

export default SignUp;
