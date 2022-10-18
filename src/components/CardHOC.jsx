import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const withCard =
  (Component) =>
  ({ ...props }) =>
    (
      <Container
        style={{ maxWidth: '60vw', display: 'flex-box', marginInline: 'auto' }}
      >
        <Card
          className='text-center'
          style={{ backgroundColor: '#bbebbb', display: 'box' }}
        >
          <Card.Header>Testing HOC</Card.Header>
          <Card.Body>
            <Card.Title>This is the wrapper for the child component</Card.Title>
            <Component {...props} />
          </Card.Body>
          <Card.Footer className='text-muted'>2 days ago</Card.Footer>
        </Card>
      </Container>
    );

export default withCard;
