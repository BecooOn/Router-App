import React, { useEffect, useState } from "react";
import Loading from "../assets/loading.gif";
import Container from "react-bootstrap/Container";
import Followers from "../components/Followers";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (!loading) {
      fetch(
        "https://api.github.com/users/anthonyharold67/followers?per_page=10"
      )
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loading]); // loading durumu değiştiğinde bu useEffect çalışsın

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <img src={Loading} width={250} alt="Loading" />
      </Container>
    );
  }

  return <Followers users={users} />;
};

export default Home;
