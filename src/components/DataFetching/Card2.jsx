import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import stone from '../../assets/stone.webp';
import React from 'react';
import { Button } from 'react-bootstrap';

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
const ImgOverlayExample = ({
  title,
  description,
  btnText,
  coverImg,
  btnFn,
}) => {
  return (
    <>
      <Container>
        <Card className='bg-dark text-white'>
          <Card.Img src={coverImg} alt='Card image' />
          <Card.ImgOverlay style={{ marginTop: '60%' }}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text></Card.Text>
            <Button
              variant='primary'
              onClick={() => {
                btnFn();
              }}
            >
              {btnText}
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
};

export default ImgOverlayExample;
