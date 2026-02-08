import css from './Profile.module.css';

export const metadata = {
  title: 'Profile',
};

export default function ProfilePage() {
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1>Profile Page</h1>
        <a href="/profile/edit">Edit Profile</a>
      </div>
    </main>
  );
}
