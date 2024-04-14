import React, { useState, useEffect } from "react";
import CardFollowers from "../components/CardFollowers";
import Paginate from "./Paginate";

const Followers = ({ users, search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemPerPage = 10;

  useEffect(() => {
    const filteredUsers = search
      ? users.filter((user) => user.login.toLowerCase().includes(search))
      : users;
    setCurrentItems(filteredUsers);
  }, [users, search]);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  // Arama sonucunda bulunan kullanıcının indeksini bulmak için
  const foundUserIndex = currentItems.findIndex((user) =>
    user.login.toLowerCase().includes(search)
  );
  // console.log(foundUserIndex);

  // Eğer kullanıcı bulunduysa ve bulunan kullanıcı mevcut sayfanın dışında ise, onun bulunduğu sayfaya gitmek için
  useEffect(() => {
    if (foundUserIndex !== -1) {
      const userPage = Math.ceil((foundUserIndex + 1) / itemPerPage);
      setCurrentPage(userPage);
    }
  }, [foundUserIndex, itemPerPage]);

  return (
    <>
      <CardFollowers
        currentItems={currentItems.slice(indexOfFirstItem, indexOfLastItem)}
      />
      <Paginate
        currentItems={currentItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={Math.ceil(currentItems.length / itemPerPage)}
        indexOfLastItem={indexOfLastItem}
      />
    </>
  );
};

export default Followers;
