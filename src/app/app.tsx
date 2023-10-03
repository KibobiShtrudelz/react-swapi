import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home, People } from '@pages'
import { Main, Header } from '@components'

import { paths } from '@constants'

import styles from './app.module.scss'

const router = createBrowserRouter([
  { path: paths.home, element: <Home /> },
  { path: paths.people, element: <People /> }
])

export function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Main>
        <RouterProvider router={router} />
      </Main>
    </div>
  )
}

export default App
