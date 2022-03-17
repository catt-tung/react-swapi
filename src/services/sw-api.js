const baseUrl = 'https://swapi.dev/'

function getAllStarships() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

function getStarshipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then( res => res.json())
}

export {
  getAllStarships,
  getStarshipDetails,
}