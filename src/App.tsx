import { useRoutes } from 'hookrouter'
import routes from './utils/routes'

const App = () => {
  const routeResult = useRoutes(routes)
  return routeResult
}

export default App
