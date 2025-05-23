import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/components/Layout/HeaderOnly';
//Anonymous User
const publicRoutes = [
    { path: '/', component: Home },

    { path: '/following', component: Following },

    { path: '/:nickname', component: Profile },

    { path: '/upload', component: Upload, layout: HeaderOnly },

    { path: '/search', component: Search, layout: null },
];

// Registered User
const privateRoutes = [];

export { publicRoutes, privateRoutes };
