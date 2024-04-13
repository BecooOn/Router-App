import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function CardFollowers({ users }) {
  console.log(users);
  return (
    <Container className='d-flex justify-content-center gap-4 flex-wrap mt-4 mb-4'>
      {users.map((user) => (
        <Card style={{ width: '14rem' }} className='text-center'>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go to GitHub</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default CardFollowers;
