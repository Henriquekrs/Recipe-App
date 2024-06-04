import Image from "next/image";
import All from '@/assets/AllDrink.svg';
import Ordinary from '@/assets/Ordinary.svg';
import Cocktail from '@/assets/Cocktail.svg';
import Shake from '@/assets/Shake.svg';
import Other from '@/assets/Other.svg';
import Cocoa from '@/assets/Cocoa.svg';
import styles from '@/styles/ContainerFilter.module.css'
import { useGlobalContext } from "@/context/GlobalProvider";
import { useState } from "react";

const FilterDrinks = () => {
  const { getFilteredRecipe, getDrinks } = useGlobalContext();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleClickFilter = (e: string) => {
    if (activeFilter === e) {
      setActiveFilter(null);
      getDrinks('');
    } else {
      setActiveFilter(e);
      getFilteredRecipe(false, e);
    }
  }
  return (
      <div className={styles.container}>
        <ul>
            <li id="all">
              <Image
                width={50}
                height={50}
                src={All}
                alt={`Image of All`}
              />
              <p>All</p>
            </li>
            <li id="ordinary_drink" onClick={ (e) => handleClickFilter(e.currentTarget.id) }>
              <Image
                width={50}
                height={50}
                src={Ordinary}
                alt={`Image of Ordinary Drink`}
              />
              <p>Ordinary Drink</p>
            </li>
            <li id="cocktail" onClick={ (e) => handleClickFilter(e.currentTarget.id) }>
              <Image
                width={50}
                height={50}
                src={Cocktail}
                alt={`Image of Cocktail`}
              />
              <p>Cocktail</p>
            </li>
            <li id="shake" onClick={ (e) => handleClickFilter(e.currentTarget.id) }>
              <Image
                width={50}
                height={50}
                src={Shake}
                alt={`Image of Shake`}
              />
              <p>Shake</p>
            </li>
            <li id="other_/_unknown" onClick={ (e) => handleClickFilter(e.currentTarget.id) }>
              <Image
                width={50}
                height={50}
                src={Other}
                alt={`Image of Other`}
              />
              <p>Other/Unknow</p>
            </li>
            <li id="cocoa" onClick={ (e) => handleClickFilter(e.currentTarget.id) }>
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
