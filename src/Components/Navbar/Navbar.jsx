import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


export const NavbarIs = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
      >
        <Container className="navbar">
          <Navbar.Brand href="/">Ecom</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tops">Tops</Nav.Link>
              <Nav.Link href="/kurtis">Kurtas</Nav.Link>
              <Nav.Link href="/frocks">Frocks</Nav.Link>
              <Nav.Link href="/middis">Middis</Nav.Link>
              <Nav.Link href="/denims">Denims</Nav.Link>
              <Nav.Link href="/jackets">Jackets</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#f8ec00ts"></Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
              ></Nav.Link>
              <div className="cartIcon">
                <a href="/cart">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"
                    alt=""
                    height="100%"
                    width="100%"
                  />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
          <Link to="/signup" >
             <button>SignUp</button>
            </Link>
            <Link to="/signin" >
            <button>SignIn</button>
            </Link>
      </Navbar>
      
    </div>
  );
};
