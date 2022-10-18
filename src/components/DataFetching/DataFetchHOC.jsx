import React, { useState } from 'react';

const withDataFetch =
  (Component) =>
  ({ ...props }) => {
    const [pokemon, setPokemon] = useState();
    // const [loading, setLoading] = useState(false);

    const getPokemon = () => {
      const link = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const dataUrl = new URL(link);
      new Promise((resolve, reject) => {
        resolve(
          fetch(dataUrl, {
            method: 'GET',
            cache: 'default',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log('data :>> ', data);
            })
            .catch((err) => console.log('err :>> ', err)),
        );
        reject((error) => window.alert(error));
      });
    };

    return (
      <>
        <input
          id='pokeInput'
          type='text'
          onChange={(e) => {
            setPokemon(e);
          }}
        ></input>
        <button id='fetch_test' onClick={getPokemon}>
          Submit
        </button>
        <Component {...props} />
      </>
    );
  };

export default withDataFetch;
