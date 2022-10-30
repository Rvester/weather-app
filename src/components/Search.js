import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (search, loadOptions) => ({
    options: [{ value: 1, label: search }],
    hasMore: false,
  });

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData.label);
    console.log(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search"
      debounceTimeout={500}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
