import React from 'react';
import styled from 'styled-components';
const Sphere = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: whiteSmoke;
  box-shadow: 4px -40px 60px 5px rgb(26, 117, 206) inset;
`;
const Circle = () => {
  return (
    <>
      <Sphere />
    </>
  );
};

export default Circle;
