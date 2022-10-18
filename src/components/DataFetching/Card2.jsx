import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import stone from '../../assets/stone.webp';
import React from 'react';

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
const ImgOverlayExample = () => {
  return (
    <Container>
      <Card className='bg-dark text-white'>
        <Card.Img src={stone} alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default ImgOverlayExample;
