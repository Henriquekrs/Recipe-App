import Image from 'next/image';
import all from '@/assets/AllMeal.svg';
import beef from '@/assets/Beef.svg';
import goat from '@/assets/Goat.svg';
import chicken from '@/assets/Chicken.svg';
import breakfast from '@/assets/Breakfast.svg';
import dessert from '@/assets/Dessert.svg';
import styles from '@/styles/ContainerFilter.module.css'

const FiltersMeals = () => {
  return (
    <div className={styles.container}>
      <ul>
          <li>
            <Image
              width={50}
              height={50}
              src={all}
              alt={`Image of All`}
            />
            <p>All</p>
          </li>
          <li>
            <Image
              width={50}
              height={50}
              src={beef}
              alt={`Image of beef`}
            />
            <p>Beef</p>
          </li>
          <li>
            <Image
              width={50}
              height={50}
              src={goat}
              alt={`Image of goat`}
            />
            <p>Goat</p>
          </li>
          <li>
            <Image
              width={50}
              height={50}
              src={chicken}
              alt={`Image of chicken`}
            />
            <p>Chicken</p>
          </li>
          <li>
            <Image
              width={50}
              height={50}
              src={breakfast}
              alt={`Image of breakfast`}
            />
            <p>Breakfast</p>
          </li>
          <li>
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
