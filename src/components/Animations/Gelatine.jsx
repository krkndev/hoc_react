import React from 'react';
import styled from 'styled-components';
const GelatineAnimation = styled.div`
  animation: gelatine 0.5s infinite;

  @keyframes gelatine {
    from,
    to {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;
const withGelatine =
  (Component) =>
  ({ ...props }) => {
    return (
      <GelatineAnimation>
        <Component {...props} />
      </GelatineAnimation>
    );
  };

export default withGelatine;
