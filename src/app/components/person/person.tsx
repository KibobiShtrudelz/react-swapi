import { PersonProps } from '@interfaces'

import styles from './person.module.scss'

export function Person({
  url,
  name,
  mass,
  films,
  height,
  gender,
  edited,
  species,
  created,
  vehicles,
  eye_color,
  starships,
  homeworld,
  hair_color,
  skin_color,
  birth_year
}: PersonProps) {
  const editedDate = new Date(edited).toLocaleString()
  const createdDate = new Date(created).toLocaleString()

  return (
    <div className={styles.person}>
      <h1>Name: {name}</h1>

      <p>URL: {url}</p>

      <p>Birth year: {birth_year}</p>

      <p>Gender: {gender}</p>

      <p>Mass: {mass}</p>

      <p>Height: {height}</p>

      <p>Eyes color: {eye_color}</p>

      <p>Hair color: {hair_color}</p>

      <p>Skin color: {skin_color}</p>

      <p>Homeworld: {homeworld}</p>

      {species?.length > 0 && (
        <>
          <p>Species:</p>

          <ul>
            {species?.map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </>
      )}

      {films?.length > 0 && (
        <>
          <p>Films:</p>

          <ul>
            {films?.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {vehicles?.length > 0 && (
        <>
          <p>Vehicles:</p>

          <ul>
            {vehicles?.map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </>
      )}

      {starships?.length > 0 && (
        <>
          <p>Starships:</p>

          <ul>
            {starships?.map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </>
      )}

      <p>Created: {createdDate}</p>

      <p>Edited: {editedDate}</p>
    </div>
  )
}

export default Person
