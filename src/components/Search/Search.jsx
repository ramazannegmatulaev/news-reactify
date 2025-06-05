import React from "react";
import styles from "./styles.module.css";

export const Search = ({ keywords, setKeywords }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
      />
    </div>
  );
};

export default Search;
