import { useQuery } from '@tanstack/react-query'

import { Person } from '@components'

import { peopleService } from '@services'
import { PersonProps } from '@interfaces'

import styles from './people.module.scss'

export function People() {
  const { data: swapiData, isFetching } = useQuery({
    ...peopleService(),
    staleTime: 10000
  })

  return (
    <div className={styles.people}>
      {isFetching ? (
        <p>Feching people...</p>
      ) : (
        <ul>
          {swapiData?.results?.map((person: PersonProps) => (
            <li key={person.name}>
              <Person {...person} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
