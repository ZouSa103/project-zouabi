import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">React-Bootstrap App</Navbar.Brand>
      </Navbar>
      <Container>
        <header className="App-header">
          {/* Votre logo et contenu existant */}
        </header>
        <h1 className="mt-3">Bienvenue dans React-Bootstrap</h1>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>Ceci est la Carte 1</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>Ceci est la Carte 2</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>Ceci est la Carte 3</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
