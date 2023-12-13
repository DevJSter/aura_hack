import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1><a href="https://job-set.netlify.app/">Dash-Board</a></h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
