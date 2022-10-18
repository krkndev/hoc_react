import React, { useState } from 'react';

export const FetchData = (methodType = 'GET') => {
  const [nameState, setNameState] = useState('');
  console.log('nameState :>> ', nameState);
  const enterDown = (e) => {
    if (e.keyCode === 13) {
      fetchData();
    }
  };
  // precio bitcoin y pokemon al mismo tiempo

  // usar Promise.all()

  let link = `https://pokeapi.co/api/v2/pokemon/${nameState}`;
  let urlString = new URL(link);
  let bitcoinUrl = new URL(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const fetchData = () => {
    const fetchPokemon = new Promise((resolve, reject) => {
      resolve(
        fetch(urlString, {
          method: 'GET',
          cache: 'default',
          mode: 'cors',
          //get ? querystring : aqui
        })
          .then((response) => response.json())
          .then((data) => console.log('dataLog', data))
          .catch((error) => console.log('error :>> ', error)),
      );
      reject((error) => console.log('error :>> ', error));
    });

    const fetchBitcoin = new Promise((resolve, reject) => {
      resolve(
        fetch(bitcoinUrl, {
          method: 'GET',
          cache: 'default',
          mode: 'cors',
          //get ? querystring : aqui
        })
          .then((response) => response.json())
          .then((data) => console.log('dataLog', data))
          .catch((error) => console.log('error :>> ', error)),
      );
      reject((error) => console.log('error :>> ', error));
    });

    Promise.all([fetchPokemon, fetchBitcoin]);
  };

  return (
    <div>
      <input
        id='textbox'
        type='text'
        onKeyDown={(e) => enterDown(e)}
        onChange={(e) => {
          e.preventDefault();
          setNameState(e.target.value);
        }}
      ></input>

      {/* <input placeholder='search' id='textbox' type='text'></input> */}
      <button id='fetch_test' onClick={fetchData}>
        Submit
      </button>
    </div>
  );
};
