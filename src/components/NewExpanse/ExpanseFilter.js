import React, { useState } from "react";

const ExpanseFilter = (props) => {
  const [Filter, setFilter] = useState("2019"); // set the state intial is 2019
  //condition for showing the option postion for apply the loop , by taking the 0,1,2 we llop the array according to this value
  let filterPos = 0;
  if (Filter === "all") {
    filterPos = 0;
  } else if (Filter === "2021") {
    filterPos = 1;
  } else if (Filter === "2020") {
    filterPos = 2;
  } else if (Filter === "2019") {
    filterPos = 3;
  }
  //FilterHandler
  const filterHandler = (e) => {
    let optionTarget = e.target.value;
    setFilter(optionTarget);
    props.onfilterData(optionTarget);
    console.log(optionTarget);
  };
  return (
    <div className="expenses-filter">
      <div className=" expenses-filter__control">
        <label>Filter by year</label>
        <select value={Filter} onChange={filterHandler}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className={Filter}>
        <div>{Filter}</div>
      </div>
    </div>
  );
};

export default ExpanseFilter;
