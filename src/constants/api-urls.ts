const baseUrl = 'https://swapi.dev/api/'

export const apiUrls = {
  root: baseUrl,
  films: `${baseUrl}films/`,
  filmById: (id: number) => `${baseUrl}films/${id}/`,
  people: `${baseUrl}people/`,
  personById: (id: number) => `${baseUrl}people/${id}/`,
  planets: `${baseUrl}planets/`,
  planetById: (id: number) => `${baseUrl}planets/${id}/`,
  species: `${baseUrl}species/`,
  speciesById: (id: number) => `${baseUrl}species/${id}/`,
  vehicles: `${baseUrl}vehicles/`,
  vehicleById: (id: number) => `${baseUrl}vehicles/${id}/`,
  starships: `${baseUrl}starships/`,
  starshipById: (id: number) => `${baseUrl}starships/${id}/`
} as const
