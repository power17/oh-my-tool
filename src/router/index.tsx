import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  type RouteObject,
} from 'react-router-dom';
import DefaultLayouts from '@/layouts/default';
import Home from '@/pages/dashboard/home';
import Page404 from '@/pages/sys/error/Page404';

const Main_ROUTES = {
  path: '',
  element: <DefaultLayouts />,
  errorElement: <Page404 />,
  children: [
    { index: true, element: <Navigate to="/dashboard/workbench" replace /> },
    {
      path: '/dashboard/workbench',
      element: <Home />,
    },
  ],
};
const routes = [Main_ROUTES] as RouteObject[];
const router = createBrowserRouter(routes);

const Router = () => <RouterProvider router={router} />;
export default Router;
