import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import film from '../../assets/film.webp';
// receives a component and injects information or dependencies
const Container = styled.span`
  margin-inline: auto;
  margin-block: 50px;
  padding: 5%;
  background-color: #fff;
  border-radius: 25px;
  display: block;
  width: 30vw;
  height: 5 0vh;
  font-size: 20px;
  box-shadow: 10px 10px 10px 7px #ccc;
`;
function BasicExample() {
  return (
    <Container>
      <Card style={{ width: '100%', marginInline: 'auto' }}>
        <Card.Img variant='top' src={film} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BasicExample;
