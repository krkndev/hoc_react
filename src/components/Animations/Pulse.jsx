import React from 'react';
import styled from 'styled-components';

const PulseAnimation = styled.div`
  animation: pulse 1s infinite ease-in-out alternate;

  @keyframes pulse {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;

const withPulse =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <PulseAnimation>
          <Component {...props} />
        </PulseAnimation>
      </>
    );
  };

export default withPulse;
