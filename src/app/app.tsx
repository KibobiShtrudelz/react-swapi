import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Header } from '@components'
import { Home, People } from '@pages'

import { paths } from '@constants'

const router = createBrowserRouter([
  { path: paths.home, element: <Home /> },
  { path: paths.people, element: <People /> }
])

export function App() {
  return (
    <div>
      <Header />

      <RouterProvider router={router} />
    </div>
  )
}

export default App
