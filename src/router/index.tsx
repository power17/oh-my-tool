import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  type RouteObject,
} from 'react-router-dom'
import DefaultLayouts from '@/layouts'

const Main_ROUTE = {
  path: '/',
  element: <DefaultLayouts />,
  children: [{ index: true, element: <Navigate to="/" replace /> }],
}

const routes = [Main_ROUTE] as RouteObject[]
const router = createBrowserRouter(routes)

const Router = () => <RouterProvider router={router} />
export default Router
