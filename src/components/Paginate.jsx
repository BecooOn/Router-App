import React from "react";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

const Paginate = ({
  users,
  currentPage,
  setCurrentPage,
  totalPage,
  indexOfLastItem,
}) => {
  console.log(totalPage);
  const items = [];
  for (let i = 1; i <= totalPage; i++) {
    items.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={
          currentPage === i ? "page-item active1 p-2" : "page-item p-1"
        }
      >
        {i}
      </button>
    );
  }
  return (
    <div className="text-center fs-5 p-2">
      <button
        className="page-item p-1 me-1"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <GrCaretPrevious />
      </button>

      {items}
      <button
        className="page-item p-1 ms-1"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={indexOfLastItem >= users.length}
      >
        <GrCaretNext />
      </button>
    </div>
  );
};

export default Paginate;
