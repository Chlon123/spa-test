import { SITE_NAME } from './common';

const getRouteTitle = (title) => `${title} | ${SITE_NAME}`;

export const ROUTES = {
    Homepage: '/',
    Register: '/register',
    Login: '/login',
    Dashboard: '/dashboard',
    NotFound: '/404',
};

export const routesConfig = {
    [ROUTES.NotFound]: {
        id: ROUTES.NotFound,
        page: '/src/pages/404/404.html',
        title: getRouteTitle('404'),
        description: 'Page not found',
        script: '/src/pages/404/404.js',
        styles: '/src/pages/404/404.css',
    },
    [ROUTES.Homepage]: {
        id: ROUTES.Homepage,
        page: '/src/pages/homepage/index.html',
        title: getRouteTitle('Home'),
        description: 'This is homepage',
        script: '/src/pages/homepage/homepage.js',
        styles: '/src/pages/homepage/homepage.css',
    },
    [ROUTES.Login]: {
        id: ROUTES.Login,
        page: '/src/pages/login/login.html',
        title: getRouteTitle('Login'),
        description: 'Welcome on login page',
        script: '/src/pages/login/login.js',
        styles: '/src/pages/login/login.css',
    },
    [ROUTES.Register]: {
        id: ROUTES.Register,
        page: '/src/pages/register/register.html',
        title: getRouteTitle('Register'),
        description: 'Welcome on register page',
        script: '/src/pages/register/register.js',
        styles: '/src/pages/register/register.css',
    },
    [ROUTES.Dashboard]: {
        id: ROUTES.Dashboard,
        page: '/src/pages/dashboard/dashboard.html',
        title: getRouteTitle('Dashboard'),
        description: 'Say hello to dashboard page',
        script: '/src/pages/dashboard/dashboard.js',
        styles: '/src/pages/dashboard/dashboard.css',
    },
};
