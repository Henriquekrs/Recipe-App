import { useGlobalContext } from '@/context/GlobalProvider';
import styles from '@/styles/ContainerProfile.module.css';
import Link from 'next/link';

const ProfileOptions = () => {
  const { email } = useGlobalContext();
  console.log(email, '<== email component');

  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      <h2>{ email }</h2>
      <Link href="/done-recipes">Done Recipes</Link>
      <Link href="/favorites">Favorite Recipes</Link>
      <Link href="/login">Logout</Link>
    </div>
  )
}

export default ProfileOptions;