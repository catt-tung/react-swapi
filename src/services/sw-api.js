const baseUrl = 'https://swapi.dev/'

function getAllStarships() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

export {
  getAllStarships,
}