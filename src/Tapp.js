import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ImgOverlayExample from './components/DataFetching/Card2';
import withDataFetch from './components/DataFetching/DataFetchHOC';
import CardExample from './components/DataFetching/Card';
import { Row } from 'react-bootstrap';

const Tapp = () => {
  const FirstDummy = withDataFetch(CardExample);
  const SecondDummy = withDataFetch(ImgOverlayExample);
  return (
    <>
      <Row>
        {/* <FirstDummy /> */}
        <SecondDummy />
      </Row>
    </>
  );
};

export default Tapp;
