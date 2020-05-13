import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = (event) => {
    const content = event.target.value;
    dispatch(setFilter(content));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={onFilterChange} />
    </div>
  );
};

export default Filter;
