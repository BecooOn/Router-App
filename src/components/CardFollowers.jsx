import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function CardFollowers({ currentItems }) {
  // console.log(currentItems);
  return (
    <Container className="d-flex justify-content-center gap-4 flex-wrap mt-4 mb-4">
      {currentItems.map((user) => (
        <Card
        key={user.id}
          style={{ width: "15rem", height: "29rem" }}
          className="text-center"
        >
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none fs-5">
                Go to GitHub
              </a>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default CardFollowers;
