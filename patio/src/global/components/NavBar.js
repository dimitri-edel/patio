import { Navbar, Nav, Container, Form } from "react-bootstrap";

function NavBar({ setTheme }) {
    function handleChange(e) {
        setTheme(e.target.value);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar Logo or something</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/page1">Page1</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Form.Control
                    as="select"
                    name="themechanger"
                    onChange={handleChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>                    
                </Form.Control>
            </Container>
        </Navbar>
    );
}

export default NavBar;