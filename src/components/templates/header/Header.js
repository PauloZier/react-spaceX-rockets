import { Container, Nav, Navbar } from "react-bootstrap";
import Routes from "../../../routes/Routes";

export default function Header() {

    return (
        <header>
            <Navbar className="pb-5" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><strong>SpaceX Rockets</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes />
        </header>
    );
}