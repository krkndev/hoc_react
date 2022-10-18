import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const AnimationWrapper = styled.div`
  padding: 3em;
  background-color: #ccc;

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const Slideshow = styled.div`
  width: 625px;
  margin: 0 auto;
  overflow: hidden;
  border: solid 2px white;
  border-radius: 25px;
`;

const SlideshowContainer = styled.div`
  width: 2500px;
  font-size: 0;
  transition: 1s ease;
  height: 225px;
`;

// const SlideImg = styled.img`
//   width: 625px;
//   height: auto;
//   display: inline-block;
//   object-fit: cover;
// `;

const TextContainer = styled.div`
  height: auto;
  position: relative;
  width: 625px;
  display: inline-block;
  font-size: 16px;
  text-align: center;
`;

const Slide = styled.div`
  animation: slide 24s ease infinite;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }

    12.5% {
      transform: translateX(0%);
    }

    25% {
      transform: translateX(-25%);
    }

    37.5% {
      transform: translateX(-25%);
    }

    50% {
      transform: translateX(-50%);
    }

    62.5% {
      transform: translateX(-50%);
    }

    75% {
      transform: translateX(-75%);
    }

    87.5% {
      transform: translateX(-75%);
    }

    99% {
      transform: translateX(-75%);
    }

    100% {
      transform: translateX(0);
    }
  }
  &:hover {
    animation-play-state: paused;
    cursor: pointer;
  }
  .p {
    margin-top: 140px;
    text-align: center;
  }
`;

const withSlider =
  (Component, Component2) =>
  ({ ...props }) => {
    return (
      <>
        <a href='/test'>link to test</a>
        <Button onClick={() => console.log('localStorage :>> ', localStorage)}>
          Logs
        </Button>
        <AnimationWrapper>
          <Slideshow>
            <SlideshowContainer>
              <Slide>
                <TextContainer>
                  <Component {...props} />
                  <Component2 {...props} />
                </TextContainer>
                <TextContainer>
                  <Component {...props} />
                  <Component2 {...props} />
                </TextContainer>
                <TextContainer>
                  <Component {...props} />
                  <Component2 {...props} />
                </TextContainer>
                <TextContainer>
                  <Component {...props} />
                  <Component2 {...props} />
                </TextContainer>
              </Slide>
            </SlideshowContainer>
          </Slideshow>
        </AnimationWrapper>
      </>
    );
  };

export default withSlider;
