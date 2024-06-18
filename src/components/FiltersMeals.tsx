import React, { useState } from 'react'
import Image from 'next/image'
import all from '@/assets/AllMeal.svg'
import beef from '@/assets/Beef.svg'
import goat from '@/assets/Goat.svg'
import chicken from '@/assets/Chicken.svg'
import breakfast from '@/assets/Breakfast.svg'
import dessert from '@/assets/Dessert.svg'
import styles from '@/styles/ContainerFilter.module.css'
import { useGlobalContext } from '@/context/GlobalProvider'
import { manageFilterSelection } from '@/utils/filterMealsHandler'

const FiltersMeals = () => {
  const { getFilteredRecipe, getMeals } = useGlobalContext()
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const handleClickFilter = (e: string) => {
    manageFilterSelection(
      activeFilter,
      e,
      setActiveFilter,
      getMeals,
      getFilteredRecipe,
    )
  }

  return (
    <div className={styles.container}>
      <ul>
        <button id="all" onClick={() => getMeals('')}>
          <Image width={50} height={50} src={all} alt={'Image of All'} />
          <p>All</p>
        </button>
        <button
          id="Beef"
          onClick={(e) => handleClickFilter(e.currentTarget.id)}
        >
          <Image width={50} height={50} src={beef} alt={'Image of beef'} />
          <p>Beef</p>
        </button>
        <button
          id="Goat"
          onClick={(e) => handleClickFilter(e.currentTarget.id)}
        >
          <Image width={50} height={50} src={goat} alt={'Image of goat'} />
          <p>Goat</p>
        </button>
        <button
          id="Chicken"
          onClick={(e) => handleClickFilter(e.currentTarget.id)}
        >
          <Image
            width={50}
            height={50}
            src={chicken}
            alt={'Image of chicken'}
          />
          <p>Chicken</p>
        </button>
        <button
          id="Breakfast"
          onClick={(e) => handleClickFilter(e.currentTarget.id)}
        >
          <Image
            width={50}
            height={50}
            src={breakfast}
            alt={'Image of breakfast'}
          />
          <p>Breakfast</p>
        </button>
        <button
          id="Dessert"
          onClick={(e) => handleClickFilter(e.currentTarget.id)}
        >
          <Image
            width={50}
            height={50}
            src={dessert}
            alt={'Image of dessert'}
          />
          <p>Dessert</p>
        </button>
      </ul>
    </div>
  )
}

export default FiltersMeals
