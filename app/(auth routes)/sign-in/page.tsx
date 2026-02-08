'use client';

import css from './SignIn.module.css';
import { login } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem(
      'password'
    ) as HTMLInputElement).value;

    await login({ email, password });
    router.push('/profile');
  };

  return (
    <main className={css.mainContent}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.formTitle}>Sign in</h1>

        <input name="email" type="email" required />
        <input name="password" type="password" required />

        <button type="submit">Log in</button>
      </form>
    </main>
  );
}
