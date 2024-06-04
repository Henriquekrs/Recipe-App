import Image from 'next/image';
import all from '@/assets/AllMeal.svg';
import beef from '@/assets/Beef.svg';
import goat from '@/assets/Goat.svg';
import chicken from '@/assets/Chicken.svg';
import breakfast from '@/assets/Breakfast.svg';
import dessert from '@/assets/Dessert.svg';
import styles from '@/styles/ContainerFilter.module.css'
import { useGlobalContext } from '@/context/GlobalProvider';
import { useState } from 'react';

const FiltersMeals = () => {
  const { getFilteredRecipe, getMeals } = useGlobalContext();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleClickFilter = (e: string) => {
    if (activeFilter === e) {
      setActiveFilter(null);
      getMeals('');
    } else {
      setActiveFilter(e);
      getFilteredRecipe(true, e);
    }
  }
  return (
    <div className={styles.container}>
      <ul>
          <li id='all'>
            <Image
              width={50}
              height={50}
              src={all}
              alt={`Image of All`}
            />
            <p>All</p>
          </li>
          <li id='Beef' onClick={(e) => handleClickFilter(e.currentTarget.id)}>
            <Image
              width={50}
              height={50}
              src={beef}
              alt={`Image of beef`}
            />
            <p>Beef</p>
          </li>
          <li id='Goat' onClick={(e) => handleClickFilter(e.currentTarget.id)}>
            <Image
              width={50}
              height={50}
              src={goat}
              alt={`Image of goat`}
            />
            <p>Goat</p>
          </li>
          <li id='Chicken' onClick={(e) => handleClickFilter(e.currentTarget.id)}>
            <Image
              width={50}
              height={50}
              src={chicken}
              alt={`Image of chicken`}
            />
            <p>Chicken</p>
          </li>
          <li id='Breakfast' onClick={(e) => handleClickFilter(e.currentTarget.id)}>
            <Image
              width={50}
              height={50}
              src={breakfast}
              alt={`Image of breakfast`}
            />
            <p>Breakfast</p>
          </li>
          <li id='Dessert' onClick={(e) => handleClickFilter(e.currentTarget.id)}>
            <Image
              width={50}
              height={50}
              src={dessert}
              alt={`Image of dessert`}
            />
            <p>Dessert</p>
          </li>
      </ul>
    </div>
  )
};

export default FiltersMeals;
