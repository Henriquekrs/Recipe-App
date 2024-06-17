import React from 'react'
import Image from 'next/image'
import IconSearch from '@/assets/icone-pesquiar.svg'
import styles from '@/styles/ButtonSearch.module.css'

const ButtonSearch = () => {
  return (
    <div className={styles.container}>
      <Image src={IconSearch} alt="Icon Search"></Image>
    </div>
  )
}

export default ButtonSearch
