import React, { useState, useEffect } from "react";
import CardFollowers from "../components/CardFollowers";
import Paginate from "./Paginate";

const Followers = ({ users, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemPerPage = 10;
  const totalPage = Math.ceil(
    search
      ? currentItems.length / itemPerPage
      : users.length / itemPerPage
  );
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentItems.length);
  useEffect(() => {
    const filteredUsers = search
      ? users.filter((user) => user.login.toLowerCase().includes(search))
      : users;
    setCurrentItems(filteredUsers.slice(indexOfFirstItem, indexOfLastItem));
  }, [users, search, currentPage, indexOfFirstItem, indexOfLastItem]);

  return (
    <>
      <CardFollowers currentItems={currentItems} />
      <Paginate
        users={users}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        indexOfLastItem={indexOfLastItem}
      />
    </>
  );
};

export default Followers;
