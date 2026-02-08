'use client';

import css from './SignUp.module.css';
import { register } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem(
      'password'
    ) as HTMLInputElement).value;

    await register({ email, password });
    router.push('/profile');
  };

  return (
    <main className={css.mainContent}>
      <h1 className={css.formTitle}>Sign up</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </main>
  );
}
