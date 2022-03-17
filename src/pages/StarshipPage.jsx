import React, { useState, useEffect } from 'react';
import { getAllStarships } from '../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
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
          
          <button><Link to='/starship' state={{ starshipName }} key={starshipName.name}>{starshipName.name}</Link></button>
        ))}
      </div>
    </>
  );
}

export default StarshipPage;