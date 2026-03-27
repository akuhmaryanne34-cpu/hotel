import styles from "./filtersidebar.module.css";

const FilterSidebar = ({
  selectedTypes,
  setSelectedTypes,
  maxPrice,
  setMaxPrice,
}) => {
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className={styles.sidebar}>
      <h2>Filter</h2>

      {/* TYPE */}
      <div>
        <p>Room Type</p>

        {["Deluxe", "Suite", "Family"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* PRICE */}
      <div>
        <p>Max Price: ${maxPrice}</p>

        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
