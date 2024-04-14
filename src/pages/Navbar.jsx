import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn, search, setSearch }) {
  const handleSearch = (e) => {
    // console.log(e);
    e.preventDefault();
    const searchText = e.target.value.toLowerCase().trim();
    setSearch(searchText);
  };
  return (
    <div className="d-flex justify-content-around p-3 navbar">
      <Nav className="d-flex gap-3 fs-4">
        <Nav.Item>
          <a
            href="https://github.com/BecooOn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./img/becooOn.png"
              roundedCircle
              className="mb-3"
              width={"40px"}
              alt="becooOn"
            />
          </a>
        </Nav.Item>
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
      <Form>
        <Row className="justify-content-around">
          <Col xs="auto">
            <Form.Control
              type="search"
              placeholder="Search user..."
              className=" mr-sm-2"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={handleSearch}>
              Search
            </Button>
          </Col>
          <Col xs="auto" className="p-2">
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
    </div>
  );
}

export default Navbar;
