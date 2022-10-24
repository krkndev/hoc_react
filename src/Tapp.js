import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MyTable from './components/TableHOC/MyTable';
import withExternalData from './components/TableHOC/TableHoc';

const Tapp = () => {
  const External2 = withExternalData(MyTable);
  return (
    <>
      {/* <MyTable /> */}
      <External2 filterCat closeOnSelect />
    </>
  );
};

export default Tapp;
