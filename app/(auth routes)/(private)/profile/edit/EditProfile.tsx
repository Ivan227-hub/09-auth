// app/(private)/profile/edit/EditProfile.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import css from './EditProfile.module.css';
import { useAuthStore } from '@/lib/store/authStore';
import { updateMe } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

const EditProfile: React.FC = () => {
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
        <Image
          src={user?.avatar || '/default-avatar.png'} // fallback аватар
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />
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
};

export default EditProfile;
