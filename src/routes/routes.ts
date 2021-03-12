import * as React from 'react';
import DefaultLayout from "../Layout/DefaultLayout";
import {RouteConfig} from "react-router-config";

const Home = React.lazy(() => import(  /* webpackPrefetch: false, webpackChunkName: "Home" */  "../pages/Home/Home"));
const Contact = React.lazy(() => import(  /* webpackPrefetch: false, webpackChunkName: "Contact" */  "../pages/Contact/Contact"));
const About = React.lazy(() => import(  /* webpackPrefetch: false, webpackChunkName: "About" */  "../pages/About/About"));
const Stars = React.lazy(() => import(  /* webpackPrefetch: false, webpackChunkName: "Stars" */  "../pages/Stars/Stars"));

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
