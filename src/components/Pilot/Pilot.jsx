const Pilot = (props) => {
  let pilotList = props.pilotObject.map((pilot) => pilot.name)
  
  return ( 
    <>
      <p>{pilotList.join(', ')}</p>
    </>
  );
}

export default Pilot;
