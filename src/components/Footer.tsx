import styles from '@/styles/ContainerFooter.module.css';

const FooterBar = () => {
  return (
    <div className={styles.container}>
      <a href="/drinks">Drinks</a>
      <a href="/meals">Meals</a>
    </div>
  )
};

export default FooterBar;
