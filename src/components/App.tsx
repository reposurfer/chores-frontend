import Navbar from './organisms/navbar/navbar';
import OverviewPage from './pages/overview-page/overview-page';
import { Outlet, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ChoresPage from './pages/chores-page/chores-page';
import HouseholdsPage from './pages/households-page/households-page';
import OverviewLoader from '../loaders/overviewLoader';
import NotFoundPage from './pages/notfound-page/notfound-page';
import ErrorPage from './pages/error-page/error-page';
import LoginPage from './pages/login-page/login-page';
import RouteGuard from '../guards/route-guard';
import RegisterPage from './pages/register-page/register-page';
import AuthenticatedRouteGuard from '../guards/authed-route-guard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteGuard component={<NavbarWrapper />} />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
        loader: OverviewLoader,
        errorElement: <RouteGuard component={<ErrorPage />} />,
      },
      {
        path: "/my-chores",
        element: <RouteGuard component={<ChoresPage />} />,

      },
      {
        path: "/households",
        element: <RouteGuard component={<HouseholdsPage />} />,

      },
      {
        path: "*",
        element: <RouteGuard component={<NotFoundPage />} />,
      },
    ]
  },
  {
    path: "/login",
    element: <AuthenticatedRouteGuard component={<LoginPage />} />,
  },
  {
    path: "/register",
    element: <AuthenticatedRouteGuard component={<RegisterPage />} />,
  },
]);

function NavbarWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
};

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
