'use client';

import css from './EditProfile.module.css';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();

  return (
    <main className={css.mainContent}>
      <form>
        <input defaultValue="username" />
        <button type="submit">Save</button>
        <button type="button" onClick={() => router.push('/profile')}>
          Cancel
        </button>
      </form>
    </main>
  );
}
