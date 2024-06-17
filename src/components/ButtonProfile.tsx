import React, { useState } from 'react'
import styles from '@/styles/ButtonProfile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import IconProfile from '@/assets/icone-perfil.svg'

const ButtonProfile = () => {
  const [popupVisible, setPopupVisible] = useState(false)

  const togglePopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setPopupVisible(!popupVisible)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={styles.section}
          onClick={(event) => togglePopup(event)}
        >
          <Image src={IconProfile} alt="Icon Profile" width={50} height={50} />
        </button>
      </div>
      <div
        className={`${styles.popup} ${popupVisible ? styles.popupVisible : ''}`}
      >
        <div className={styles.popupContent}>
          <div className={styles.option}>
            <Link href="/profile">Profile</Link>
          </div>
          <div className={styles.option}>
            <Link href="/done-recipes">Done Recipes</Link>
          </div>
          <div className={styles.option}>
            <Link href="/favorites">Favorite Recipes</Link>
          </div>
          <button
            className={styles.closeButton}
            onClick={() => setPopupVisible(false)}
          >
            X
          </button>
        </div>
      </div>
    </>
  )
}

export default ButtonProfile
