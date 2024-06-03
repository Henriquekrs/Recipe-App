import Icone from '@/assets/ícone Recipes app.svg'
import Logo from '@/assets/logo Recipes app.svg'
import styles from '@/styles/ContainerHeader.module.css'


import Image  from 'next/image';
const HeaderBar = () => {
  return (
    <header className={styles.container}>
      <section>
        <Image src={Icone} alt='Icone app'/>
        <Image src={Logo} alt='Logo app'/>
      </section>
      <section className={styles.section}>
        <a href="">Profile</a>
        <a href="">Search</a>
      </section>
    </header>
  )
};

export default HeaderBar;
