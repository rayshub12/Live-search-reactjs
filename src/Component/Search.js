import axios from "axios";
import React, { useState } from "react";
import SearchItems from "./SearchItems";
import "../styles.css";

const Search = () => {
  const search = async (val) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
      );
      const data_items = await res.data.results;
      setitem(data_items);
      return;
    } catch (error) {
      setitem();
      return;
    }
  };

  const searchHandler = (event) => {
    search(event.target.value);
    setinputValue(event.target.value);
  };

  const clearHandler = (event) => {
    setitem(null);
    setinputValue("");
  };

  const [items, setitem] = useState();
  const [inputValue, setinputValue] = useState();
  return (
    <>
      <div className="Search_box">
        <input
          className="Search_box_input"
          type="text"
          placeholder="Search here.."
          value={inputValue}
          onChange={searchHandler}
        />
        {items != null ? <SearchItems itemsValue={items} /> : ""}
        <button onClick={clearHandler}>x</button>
      </div>
    </>
  );
};

export default Search;
