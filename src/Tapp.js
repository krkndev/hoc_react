import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MyTable from './components/TableHOC/MyTable';
import withExternalData from './components/TableHOC/TableHoc';

const Tapp = () => {
  const External2 = withExternalData(MyTable, {
    "request": {
      "url": "https://dummyjson.com/products",
      "method": "GET",
      "target": "products"
    },
    "columns": [
      { id: "id" },
      { id: "title", sortable: true },
      { id: "description" },
      { id: "price" },
      { id: "discountPercentage" },
      { id: "rating" },
      { id: "stock" },
      { id: "brand" },
      { id: "category" },
      { id: "thumbnail" },
      { id: "images" }
    ],
    "paging": false,
    "ordering": false,
  });
  // const External = withExternalData(MyTable, {
  //   "request": {
  //     "url": "https://dummyjson.com/users",
  //     "method": "GET"
  //   },
  //   "columns": [
  //     {

  //     }
  //   ]
  // });
  return (
    <>
      {/* <MyTable /> */}
      <External2 filterCat closeOnSelect />
      {/* <External filterCat closeOnSelect /> */}
    </>
  );
};

export default Tapp;
