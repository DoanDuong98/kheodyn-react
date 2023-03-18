import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Products = Loadable(lazy(() => import('views/utilities/Products')));
const CreateProducts = Loadable(lazy(() => import('views/utilities/Products/createProduct')));
const Money = Loadable(lazy(() => import('views/utilities/Money')));

// sample page routing
const Orders = Loadable(lazy(() => import('views/utilities/Orders')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/products',
            element: <Products />
        },
        {
            path: '/products/create',
            element: <CreateProducts />
        },
        {
            path: '/orders',
            element: <Orders />
        },
        {
            path: '/money',
            element: <Money />
        }
    ]
};

export default MainRoutes;
