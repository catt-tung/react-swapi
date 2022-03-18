import React, { useState, useEffect } from 'react';
import { getPilots } from '../../services/sw-api';

const PilotList = (props) => {
  const [pilotObject, setPilotObject] = useState([])

  useEffect(() => {
    getPilots(props.pilotsUrl)
    .then(pilots => setPilotObject(pilots))
  }, [])

  return ( 
    <>
      <p>{pilotObject.map(pilot => pilot.name)}</p>
    </>
  );
}

export default PilotList;