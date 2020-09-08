import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from "../hooks/useDebounce";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return(
    <form onSubmit={event => event.preventDefault()} >
      <input
        className='search-bar'
        placeholder='search for a movie!'
        // type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      >
      </input>
    </form>
  )
}