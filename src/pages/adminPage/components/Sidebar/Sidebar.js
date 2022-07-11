import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import Header from "./Header";
import Menu, { MenuItem } from "./Menu";
import Footer from "./Footer";
import config from "../../../../config";
import {
    HomeActiveIcon,
    HomeIcon, UserGroupActiveIcon, UserGroupIcon,
} from '../../../../globalComponents/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBriefcase, faRightFromBracket, faWrench,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Header img='https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png' title="Cabinet Management" icon={<FontAwesomeIcon icon={faBars} />} />
            <Menu>
                <MenuItem title="Dashboard" to={config.routes.dashboard} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="User" to={config.routes.user} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Cabinet" to={config.routes.cabinet} icon={<FontAwesomeIcon icon={faBriefcase} />} activeIcon={<FontAwesomeIcon icon={faBriefcase} />} />
                <MenuItem title="Device" to={config.routes.device} icon={<FontAwesomeIcon icon={faWrench} />} activeIcon={<FontAwesomeIcon icon={faWrench} />} />
            </Menu>
            <Footer to={config.routes.dashboard} avatar='https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png' name='Thien An' job='Admin' icon={<FontAwesomeIcon icon={faRightFromBracket} />} />
        </aside>
    );
}

export default Sidebar;