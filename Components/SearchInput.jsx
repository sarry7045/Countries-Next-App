import React from "react";
import { SearchRounded } from "@material-ui/icons";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input
        className={styles.input}
        {...rest}
        placeholder="Search and Filter by Name or Region"
      />
    </div>
  );
};

export default SearchInput;
