import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLoyaut from './ui/AppLoyaut';
import ErrorMessage from './ui/ErrorMessage';
import Home from './ui/Home';

const router = createBrowserRouter([
  {
    element: <AppLoyaut />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
