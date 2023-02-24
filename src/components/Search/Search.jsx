import React, { useCallback, useState } from "react";
import styles from "./Search.module.scss";
import { debounce, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [value, setValue] = useState(searchValue);

  const testDobounce = useCallback(
    debounce((e) => {
      console.log("HELLO");
      setSearchValue(e);
    }, 500),
    []
  );

  const onChangeInput = (e) => {
    setValue(e);
    testDobounce(e);
  };

  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <Input
        value={value}
        onChange={(event) => onChangeInput(event.target.value)}
        className={styles.input}
        placeholder="search pizas"
        disableUnderline={true}
      />
    </div>
  );
};

export default Search;
