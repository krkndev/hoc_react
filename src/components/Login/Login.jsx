import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const LoginContainer = styled.span`
  margin-inline: auto;
  margin-block: 50px;
  padding: 5%;
  background-color: #fff;
  border-radius: 25px;
  display: block;
  width: 30vw;
  height: 5 0vh;
  font-size: 20px;
  box-shadow: 10px 10px 10px 7px #000;
`;
const LoginInput = styled.input`
  type: ${(props) => props.inputType || 'text'};
  margin-inline: auto;
  margin-block: 15px;
  display: block;
  width: 95%;
  height: 30px;
  font-size: 15px;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  margin-inline: auto;
  margin-top: 50px;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: block;
  width: 5vw;
  height: 5vh;
  font-size: 15px;
  box-shadow: 2px 2px 5px 2px #ccc;
  :hover {
    scale: 1.05;
    cursor: pointer;
    box-shadow: none;
  }
`;

const Login = () => {
  const [userName, setUserName] = useState();
  //eslint-disable-next-line
  const [password, setPassword] = useState();

  const testCapitals =
    `${userName}SDhfakjfgadgfads560f46as5d0f4ag`.toUpperCase();
  return (
    <>
      <LoginContainer>
        <Col>
          <Row>
            UserName:
            <LoginInput
              type={'text'}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Row>
          <Row>
            Password:
            <LoginInput
              type={'password'}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
          <Row>
            <LoginButton
              onClick={() => {
                localStorage.setItem('token', testCapitals);
                localStorage.setItem('user', userName);
                window.location = window.location.href; // url may change if logged in w/Google
              }}
            >
              Login
            </LoginButton>
            <LoginButton
              onClick={() => {
                console.log('localStorage :>> ', localStorage);
                console.log('location :>> ', window.location);
              }}
            >
              Console.Log
            </LoginButton>
          </Row>
        </Col>
      </LoginContainer>
    </>
  );
};

export default Login;
