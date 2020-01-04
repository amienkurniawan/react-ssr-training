import React from 'react';
import HomePages from './pages/HomePages';
import UsersListPages from './pages/UsersListPages';
import NotFoundPage from './pages/NotFoundPage';
import AdminListPage from './pages/AdminsListPage';
import App from './App';

export default [{
    ...App,
    routes: [
        {
            ...HomePages,
            path: '/',
            exact: true
        },
        {
            ...UsersListPages,
            path: '/users',
        },
        {
            ...AdminListPage,
            path: '/admins',
        },
        {
            ...NotFoundPage
        }
    ]
}];