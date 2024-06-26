import "./Hero.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";

function template() {
  return (
    <Container id="home" className="hero">
      <Row xs={1} md={2} className="align-items-center" >
        <Col>
          <Image roundedCircle className="mob-img" src="https://avatars.githubusercontent.com/u/9380605?s=400&u=f18130f9a63a1c21eba83f8608479033d7a55c21&v=4" />
        </Col>
        <Col>
          <h1>Nathan <span className="lastname">Nguyen</span></h1>
          <p className="subtitle">
            Software Engineer based in California
          </p>
        </Col>
      </Row>
    </Container>

  );
};

export default template;
