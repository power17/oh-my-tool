import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  type RouteObject,
} from 'react-router-dom';
import DefaultLayouts from '@/layouts';
import Home from '@/pages/home';

const Main_ROUTES = {
  path: '/',
  element: <DefaultLayouts />,
  children: [
    { index: true, element: <Navigate to="/home" replace /> },
    {
      path: '/home',
      element: <Home />,
    },
  ],
};
const routes = [Main_ROUTES] as RouteObject[];
const router = createBrowserRouter(routes);

const Router = () => <RouterProvider router={router} />;
export default Router;
