'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useAuthStore } from '@/lib/store/authStore';
import { updateMe } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import css from './EditProfile.module.css';

export default function EditProfile() {
  const { user, setUser } = useAuthStore();
  const [username, setUsername] = useState(user?.username || '');
  const router = useRouter();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = await updateMe({ username });
    setUser(updatedUser);
    router.push('/profile');
  };

  const handleCancel = () => {
    router.push('/profile');
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>
        {user?.avatar && (
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
            priority
          />
        )}
        <form className={css.profileInfo} onSubmit={handleSave}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              className={css.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p>Email: {user?.email}</p>
          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>Save</button>
            <button type="button" className={css.cancelButton} onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </main>
  );
}
