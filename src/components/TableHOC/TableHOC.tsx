import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

interface Cols {
  id: string;
  sortable?: boolean;
}

interface Request {
  url: string;
  method: 'GET' | 'POST';
  target: string;
}

interface Config {
  request: Request;
  columns : Cols[]
}

const withExternalData =
  (Component : any, config: Config) =>
  ({ ...props }) => {
    console.log('config :>> ', config);

    const [url, setUrl] = useState(config.request.url); 
    const [data, setData] = useState(null);
    const [header, setHeader] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);

    if (loading) return <div> Loading...</div>;

    const getData = (url) => {
      new Promise((resolve, reject) => {
        setLoading(true);
        fetch(url, {
          method: config.request.method,
        })
          .then((res) => res.json())
          .then((res) => {
            setData(res[config.request.target]);
            setHeader(config.columns);
            setLoading(false);
            resolve(res);
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

export default withExternalData;
