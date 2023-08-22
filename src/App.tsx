import { RouterProvider } from 'react-router-dom';
import { router }           from '@/routes/index';

export default function App(): JSX.Element {
    return ( <RouterProvider router={router} /> )
}

