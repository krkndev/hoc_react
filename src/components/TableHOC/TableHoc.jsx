import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const withExternalData =
  (Component) =>
  ({ ...props }) => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState();
    const [header, setHeader] = useState();
    const [loading, setLoading] = useState(false);
    if (loading) return <div> Loading...</div>;
    const generateHeaders = (keys) => {
      const ignoreFilters = ['description', 'discountpercentage', 'thumbnail'];
      const header = keys.map((key) => ({
        value: key,
        label: key.toUpperCase(),
        filter: !ignoreFilters.includes(key.toLowerCase()) ? true : false,
        slug: key.toLowerCase(),
      }));
      return header;
    };

    const removeProp = (obj, prop) => {
      for (let i = 0; i < obj.length; i++) {
        delete obj[i][prop];
      }
      return obj;
    };

    const getData = (url = 'https://dummyjson.com/products') => {
      const searchFor = url.substring(url.lastIndexOf('/') + 1);
      new Promise((resolve, reject) => {
        setLoading(true);
        resolve(
          fetch(url, {
            method: 'GET',
            cache: 'default',
          })
            .then((res) => res.json())
            .then((res) => {
              const keys = Object.keys(res[searchFor][0]);
              keys.pop();
              setHeader(generateHeaders(keys));
              const tmp = removeProp(res[searchFor], 'images');
              setData(tmp);
              setLoading(false);
            })
            .catch((err) => window.alert(err)),
        );
        reject((error) => {
          window.alert(error.status);
        });
      });
    };

    return (
      <>
        <Row style={{ width: '30%', margin: 'auto', paddingTop: '5%' }}>
          <input
            id='pokeInput'
            type='text'
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></input>
          <button
            id='fetch_test'
            onClick={() => {
              getData();
            }}
          >
            Submit
          </button>
        </Row>
        <Component body={data && data} header={header && header} {...props} />
      </>
    );
  };

export default withExternalData;
