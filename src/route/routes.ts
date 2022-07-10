import { lazy } from 'react';

import { iRedirect, iRoute } from '../types/router';

export const HOME_PATH = '/'
export const HOME_COMPONENT = lazy(() => import('../io/Home/HomeIO.withContext'));

export const CREATE_ACCOUNT_PATH = '/criar-conta';
const CREATE_ACCOUNT_COMPONENT = lazy(() => import('../io/CreateAccount'));

export const APP_HOME_PATH = '/app';
const APP_HOME_COMPONENT = lazy(() => import('../io/AppHome'));

const routes: (iRoute | iRedirect)[] = [
    {
        path: CREATE_ACCOUNT_PATH,
        component: CREATE_ACCOUNT_COMPONENT,
        exact: true,
        title: 'Create Account',
    },
    {
        path: APP_HOME_PATH,
        component: APP_HOME_COMPONENT,
        authenticated: true,
        exact: true,
        title: 'App Home',
    },
    {
        path: HOME_PATH,
        component: HOME_COMPONENT,
        exact: true,
        title: 'Home',
    },
    {
        redirect: true,
        to: '/',
    }
];

export default routes;