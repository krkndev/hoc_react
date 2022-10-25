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
      const header = keys.map((key) => ({
        value: key,
        label: key.toUpperCase(),
        filter: 'category',
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

    const getData = (url) => {
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
              console.log('res :>> ', res);
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
              getData(url);
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
