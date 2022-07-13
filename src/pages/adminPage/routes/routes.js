import Home from '../pages/Home';
import User from '../pages/User/';
import Cabinet from '../pages/Cabinet';
import Device from '../pages/Device';


import config from '../../../config';


const adminRoutes = [
    { path: config.routes.dashboard, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.cabinet, component: Cabinet },
    { path: config.routes.device, component: Device },
]

export { adminRoutes };