import styles from '@/styles/ContainerFooter.module.css';
import Link from 'next/link';

const FooterBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/drinks">Drinks</Link>
      <Link href="/meals">Meals</Link>
    </div>
  )
};

export default FooterBar;
