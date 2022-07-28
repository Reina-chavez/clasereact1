import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Menu1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda</Navbar.Brand>
        <Navbar.Brand href="#home">Trabaja Con Nosotros</Navbar.Brand>
        <Navbar.Brand href="#home">Compra Mayoristas</Navbar.Brand>
        <Navbar.Brand href="#home">Nosotros</Navbar.Brand>
        <Navbar.Brand href="#home">Contactanos</Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default Menu1;