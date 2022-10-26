import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const withExternalData =
  (Component, config) =>
    ({ ...props }) => {
      console.log('config :>> ', config);

      const [url, setUrl] = useState(config.request.url);
      const [data, setData] = useState();
      const [header, setHeader] = useState();
      const [loading, setLoading] = useState(false);

      if (loading) return <div> Loading...</div>;

      // const generateHeaders = () => {
      //   console.log('config.columns :>> ', config.columns);
      //   const header = config.columns.map((key) => ({
      //     value: key,
      //     label: key.toUpperCase(),
      //     filter: !ignoreFilters.includes(key.toLowerCase()) ? true : false,
      //     slug: key.toLowerCase(),
      //   }));
      //   return header;
      // };

      const removeProp = (obj, prop) => {
        for (let i = 0; i < obj.length; i++) {
          delete obj[i][prop];
        }
        return obj;
      };

      const getData = (url) => {
        new Promise((resolve, reject) => {
          setLoading(true);
          fetch(url, {
            method: config.request.method
          })
            .then((res) => res.json())
            .then((res) => {
              setHeader(config.columns);
              // // const tmp = removeProp(res[searchFor], 'images');
              // setData(res.products);
              // setLoading(false);
              // resolve(res);
            })
            .catch((err) => {
              setLoading(false);
              window.alert(err);
              reject(err);
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


withExternalData.propTypes = {
  /** Receives a table where the data will be filled. */
  component: PropTypes.element,
  /** Receives the request config. */
  request: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string
  }),
  /** Receives the request config. */
  // headers: PropTypes.shape({
  //   url: PropTypes.string.isRequired,
  //   method: PropTypes.string
  // }),
};

export default withExternalData;
