import { createBrowserRouter } from 'react-router-dom';

import Home           from '@/pages/Home';
import NotFound       from '@/pages/NotFound';
import AboutUs        from '@/pages/AboutUs';
import Login          from '@/pages/Login';

import MainLayout     from '@/layouts/MainLayout';
import SignInOutLayout     from '@/layouts/SignInOutLayout';


export const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
    ],
  },
  {
    path:'login',
    element: <SignInOutLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
     
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);