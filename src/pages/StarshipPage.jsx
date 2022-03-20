import React, { useState, useEffect } from 'react';
import { getAllStarships } from '../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  }, [])
  return ( 
    <>
      {starshipList.length ? (
        <>
          <div><h1>Star Wars Starships</h1></div>
          <div className='container'>
            {starshipList.map((starshipName) => (
              <div><Link id="name" to='/starship' state={{ starshipName }} key={starshipName.name}>{starshipName.name}</Link></div>
            ))}
          </div>
        </>
      ) : (
        <h3>Loading Ships!</h3>
      )}
    </>
  );
}

export default StarshipPage;