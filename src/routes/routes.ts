import * as React from 'react';
import {RouteConfig} from "react-router-config";
import DefaultLayout from "../layout/DefaultLayout";

const Home = React.lazy(() => import(  /* webpackPrefetch: true, webpackChunkName: "Home" */  "../pages/Home/Home"));
const Contact = React.lazy(() => import(  /* webpackPrefetch: true, webpackChunkName: "Contact" */  "../pages/Contact/Contact"));
const About = React.lazy(() => import(  /* webpackPrefetch: true, webpackChunkName: "About" */  "../pages/About/About"));
const Stars = React.lazy(() => import(  /* webpackPrefetch: true, webpackChunkName: "Stars" */  "../pages/Stars/Stars"));

const routes: RouteConfig[] = [
    {
        component: DefaultLayout,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            }, {
                path: '/contact',
                component: Contact,
                exact: true
            }, {
                path: '/about',
                component: About,
                exact: true
            },
            {
                path: '/stars',
                component: Stars,
                exact: true
            }
        ]
    }
]

export default routes;
