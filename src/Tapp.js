import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BasicExample from './components/DataFetching/Card';
import ImgOverlayExample from './components/DataFetching/Card2';
import withDataFetch from './components/DataFetching/DataFetchHOC';

const Tapp = () => {
  const FirstDummy = withDataFetch(<BasicExample />);
  return (
    <div>
      {/* <FirstDummy /> */}
      <BasicExample />
      <ImgOverlayExample />
    </div>
  );
};

export default Tapp;
