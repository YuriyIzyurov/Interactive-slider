import React from "react";
import "../assets/scss/Pagination.scss";

type PropsType = {
  setActivePage: (number, string) => void;
  activePage: number;
};
const Pagination: React.FC<PropsType> = ({ setActivePage, activePage }) => {
  return (
    <div className="pagination">
      <div className="pagination__pages">0{activePage}/06</div>
      <div className="pagination__buttons">
        <span onClick={() => setActivePage(activePage, "previous")}></span>
        <span onClick={() => setActivePage(activePage, "next")}></span>
      </div>
    </div>
  );
};

export default Pagination;
