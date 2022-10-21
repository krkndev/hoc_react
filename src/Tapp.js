import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ImgOverlayExample from './components/DataFetching/Card2';
import withDataFetch from './components/DataFetching/DataFetchHOC';
import CardExample from './components/DataFetching/Card';
import { Row } from 'react-bootstrap';
import MyTable from './components/TableHOC/MyTable';
import withExternalData from './components/TableHOC/TableHoc';
import TestComponent from './components/TestComponent';

const Tapp = () => {
  const FirstDummy = withDataFetch(CardExample);
  const SecondDummy = withDataFetch(ImgOverlayExample);
  const External = withExternalData(TestComponent);
  const External2 = withExternalData(MyTable);
  return (
    <>
      <External2 />
    </>
  );
};

export default Tapp;
