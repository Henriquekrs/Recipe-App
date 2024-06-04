import React, { useState } from 'react';
import Icone from '@/assets/ícone Recipes app.svg';
import Logo from '@/assets/logo Recipes app.svg';
import styles from '@/styles/ContainerHeader.module.css';
import Image from 'next/image';

const HeaderBar = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setPopupVisible(!popupVisible);
  };

  return (
    <header className={styles.container}>
      <section>
        <Image src={Icone} alt='Icone app' />
        <Image src={Logo} alt='Logo app' />
      </section>
      <section className={styles.section}>
        <a href="" onClick={togglePopup}>Profile</a>
        <a href="">Search</a>
      </section>
      <div className={`${styles.popup} ${popupVisible ? styles.popupVisible : ''}`}>
        <div className={styles.popupContent}>
          <div className={styles.option}><a href="/profile">Profile</a></div>
          <div className={styles.option}><a href="/done-recipes">Done Recipes</a></div>
          <div className={styles.option}><a href="/favorite-recipes">Favorite Recipes</a></div>
          <div className={styles.closeButton} onClick={() => setPopupVisible(false)}>X</div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
