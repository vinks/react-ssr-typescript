import Page1 from './pages/Page-1';
import Page2 from './pages/Page-2';

export default [
    {
        path: '/',
        exact: true,
        component: Page1,
    },
    {
        path: '/page1',
        exact: true,
        component: Page1,
    },
    {
        path: '/page2',
        exact: true,
        component: Page2,
    },
];
