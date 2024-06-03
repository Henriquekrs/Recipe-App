import Image from "next/image";
import All from '@/assets/AllDrink.svg';
import Ordinary from '@/assets/Ordinary.svg';
import Cocktail from '@/assets/Cocktail.svg';
import Shake from '@/assets/Shake.svg';
import Other from '@/assets/Other.svg';
import Cocoa from '@/assets/Cocoa.svg';
import styles from '@/styles/ContainerFilter.module.css'

const FilterDrinks = () => {
  return (
      <div className={styles.container}>
        <ul>
            <li>
              <Image
                width={50}
                height={50}
                src={All}
                alt={`Image of All`}
              />
              <p>All</p>
            </li>
            <li>
              <Image
                width={50}
                height={50}
                src={Ordinary}
                alt={`Image of Ordinary Drink`}
              />
              <p>Ordinary Drink</p>
            </li>
            <li>
              <Image
                width={50}
                height={50}
                src={Cocktail}
                alt={`Image of Cocktail`}
              />
              <p>Cocktail</p>
            </li>
            <li>
              <Image
                width={50}
                height={50}
                src={Shake}
                alt={`Image of Shake`}
              />
              <p>Shake</p>
            </li>
            <li>
              <Image
                width={50}
                height={50}
                src={Other}
                alt={`Image of Other`}
              />
              <p>Other/Unknow</p>
            </li>
            <li>
              <Image
                width={50}
                height={50}
                src={Cocoa}
                alt={`Image of Cocoa`}
              />
              <p>Cocoa</p>
            </li>
        </ul>
      </div>
    )
};

export default FilterDrinks;
