import React, { useState, useEffect } from 'react';
import { getAllStarships } from '../services/sw-api';

const StarshipPage = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  })
  return ( 
    <>
      <h1>Starship Page</h1>
      <div>
        {starshipList.map((starshipName) => (
          <p>{starshipName.name}</p>
        ))}
      </div>
    </>
  );
}

export default StarshipPage;