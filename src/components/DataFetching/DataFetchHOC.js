import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const withDataFetch =
  (Component) =>
  ({ ...props }) => {
    const [pokemon, setPokemon] = useState();
    const [pokeData, setPokeData] = useState();
    const [loading, setLoading] = useState(false);
    if (loading) return <div> Loading...</div>;

    const getPokemon = (pokemon) => {
      const link = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const dataUrl = new URL(link);
      new Promise((resolve, reject) => {
        setLoading(true);
        resolve(
          fetch(dataUrl, {
            method: 'GET',
            cache: 'default',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log('data :>> ', data);
              setPokeData(data);
              setLoading(false);
            })
            .catch((err) => console.log('err :>> ', err)),
        );
        reject((error) => {
          window.alert(error);
        });
      });
    };

    return (
      <>
        <Row style={{ width: '50%', margin: 'auto', paddingTop: '5%' }}>
          <input
            id='pokeInput'
            type='text'
            onChange={(e) => {
              setPokemon(e.target.value);
            }}
          ></input>
          <button
            id='fetch_test'
            onClick={() => console.log(getPokemon(pokemon))}
          >
            Submit
          </button>
        </Row>
        <Component
          title={pokeData && pokeData.name.toUpperCase()}
          description={
            pokeData && [
              'ID: ',
              pokeData.id,
              <br />,
              'WEIGHT: ',
              pokeData.weight,
              <br />,
              'HEIGHT: ',
              pokeData.height,
            ]
          }
          btnText={'NEXT'}
          coverImg={pokeData && pokeData.sprites.front_default}
          btnFn={() => getPokemon(pokeData.id + 1)}
          // btnFn={() => console.log(pokeData)}
          {...props}
        />
      </>
    );
  };

export default withDataFetch;
