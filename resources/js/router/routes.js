function requirePage (path) {
    return () => import(`../pages/${path}`).then(m => m.default || m)
}

export default [
    {
        path: '/',
        name: 'app',
        component: requirePage('App/index.vue')
    },
    {
        path: '*',
        component: requirePage('App/index.vue')
    },
];
