import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';
import PilotList from '../PilotList/PilotList';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getStarshipDetails(location.state.starshipName.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [location.state.starshipName.url])

  return ( 
    <>
    <div><h1>Star Wars Starships</h1></div>
    <div>
      {starshipDetails.name ?
        <div className='starship-card'>
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <h3>Pilots:</h3>
          <PilotList pilotsUrl = {starshipDetails.pilots}/>
          <a id="return" href="/"><h3>RETURN</h3></a>
        </div>
        :
        <>
          <h3>Loading Details</h3>
        </>
        }
    </div>
    </>
  );
}

export default StarshipDetails;