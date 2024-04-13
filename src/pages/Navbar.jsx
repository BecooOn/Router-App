import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Container className="d-flex justify-content-between p-3 navbar">
      <Nav className="d-flex gap-3 fs-4">
        <Nav.Item>
          <NavLink to="/">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/about">About</NavLink>
        </Nav.Item>
        {/* <Nav.Item>
          <NavLink to="/login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Logout
          </NavLink>
        </Nav.Item> */}
      </Nav>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
          <Col xs="auto">
            <NavLink
              to="/login"
              type="button"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              Logout
            </NavLink>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Navbar;
