import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getStarshipDetails(location.state.starshipName.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  })

  return ( 
    <>
    <div className='top-bar'><h1>Star Wars Starships</h1></div>
    <div>
      {StarshipDetails.name ?
        <div className='starship-card'>
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <a id="return" href="/"><h3>RETURN</h3></a>
        </div>
        :
        <>
          <h3 className='loading'>Loading Details</h3>
        </>
      }
    </div>
    </>
  );
}

export default StarshipDetails;