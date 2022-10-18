import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

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
const CardExample = ({ title, description, btnText, coverImg, btnFn }) => {
  return (
    <>
      <Container>
        <Card style={{ width: '100%', marginInline: 'auto' }}>
          <Card.Img variant='top' src={coverImg} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              variant='primary'
              onClick={() => {
                btnFn();
              }}
            >
              {btnText}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CardExample;
