import config from '../config';
// Page
import Home from '../pages/Home';
import User from '../pages/User';
//* Đường dẫn không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },

]

// * Phải đăng nhập
const privateRoutes = [

]

export { publicRoutes, privateRoutes }