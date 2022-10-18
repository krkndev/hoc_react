import React from 'react';
import styled from 'styled-components';

const GreetingAnimation = styled.div`
  animation: hithere 1s ease infinite;

  @keyframes hithere {
    30% {
      transform: scale(0.8);
    }
    40%,
    60% {
      transform: rotate(-2deg) scale(0.8);
    }
    50% {
      transform: rotate(2deg) scale(0.8);
    }
    70% {
      transform: rotate(0deg) scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const withGreeting =
  (Component) =>
  ({ ...props }) => {
    return (
      <GreetingAnimation>
        <Component {...props} />
      </GreetingAnimation>
    );
  };

export default withGreeting;
