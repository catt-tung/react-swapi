import React, { useState, useEffect } from 'react';
import { getPilots } from '../../services/sw-api';
import Pilot from '../../components/Pilot/Pilot';

const PilotList = (props) => {
  const [pilotObject, setPilotObject] = useState([])

  useEffect(() => {
    getPilots(props.pilotsUrl)
    .then(pilots => setPilotObject(pilots))
  }, [props.pilotsUrl])

  return ( 
    <> 
      <Pilot pilotObject={pilotObject} />
    </>
  );
}

export default PilotList;