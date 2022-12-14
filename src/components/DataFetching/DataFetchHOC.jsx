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
              setPokeData(data);
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
              setPokemon(e.target.value);
            }}
          ></input>
          <button
            id='fetch_test'
            onClick={() => console.log(getPokemon(pokemon))}
          >
            Submit
          </button>

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
            {...props}
          />
        </Row>
      </>
    );
  };

export default withDataFetch;
