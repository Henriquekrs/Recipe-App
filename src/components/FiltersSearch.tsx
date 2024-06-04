import styles from '@/styles/ContainerSearch.module.css';

const FiltersSearch = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search" className={styles.searchBar}/>
      <div>
        <label>
          <input type="radio" name="searchType"/> Ingredient
        </label>
        <label>
          <input type="radio" name="searchType"/> Name
        </label>
        <label>
          <input type="radio" name="searchType"/> First letter
        </label>
      </div>
      <button className={styles.searchButton}>SEARCH</button>
    </div>
  );
};

export default FiltersSearch;
