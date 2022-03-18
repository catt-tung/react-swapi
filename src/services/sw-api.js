const baseUrl = 'https://swapi.dev/'

function getAllStarships() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

function getStarshipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then( res => res.json())
}

async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}

export {
  getAllStarships,
  getStarshipDetails,
  getPilots,
}