import Navbar from './organisms/navbar/navbar';
import OverviewPage from './pages/overview-page/overview-page';
import { Outlet, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ChoresPage from './pages/chores-page/chores-page';
import HouseholdsPage from './pages/households-page/households-page';
import OverviewLoader from '../loaders/overviewLoader';
import NotFoundPage from './pages/notfound-page/notfound-page';
import ErrorPage from './pages/error-page/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
        loader: OverviewLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-chores",
        element: <ChoresPage />,

      },
      {
        path: "/households",
        element: <HouseholdsPage />,

      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ]
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
