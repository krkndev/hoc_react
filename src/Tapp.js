import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ImgOverlayExample from './components/DataFetching/Card2';
import withDataFetch from './components/DataFetching/DataFetchHOC';
import CardExample from './components/DataFetching/Card';
import film from './assets/film.webp';

const Tapp = () => {
  const FirstDummy = withDataFetch(CardExample);
  return (
    <>
      <FirstDummy />
      {/* <BasicExample cardImg={film} /> */}
      <CardExample />
      <ImgOverlayExample />
    </>
  );
};

export default Tapp;
