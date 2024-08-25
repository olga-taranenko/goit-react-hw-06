import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleSearch }) => {
  const searchInputId = useId();
  return (
    <div className={css.searchWrap}>
      <label className={css.searchLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchInputId}
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
