

import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';

// Component
import Header from "./Header";
import Menu, { MenuItem } from "./Menu";
import Footer from "./Footer";
import config from "../../../../config";

// Icon

import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBriefcase, faHome, faRightFromBracket, faUserGroup, faWrench,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Sidebar({ sidebar, setSidebar, showSidebar }) {

    return (
        <aside className={cx(sidebar ? 'wrapper' : 'active')}>
            <Header
                sidebar={sidebar}
                showSidebar={showSidebar}
                img={images.logo}
                title="Cabinet Management"
                icon={<FontAwesomeIcon icon={faBars} />}
            />

            <Menu>
                <MenuItem
                    sidebar={sidebar}
                    title="Dashboard"
                    to={config.routes.dashboard}
                    icon={sidebar ? <FontAwesomeIcon icon={faHome} width='2.5rem' /> : <FontAwesomeIcon icon={faHome} />}
                />

                <MenuItem
                    sidebar={sidebar}
                    title="User"
                    to={config.routes.user}
                    icon={sidebar ? <FontAwesomeIcon icon={faUserGroup} width='2.5rem' /> : <FontAwesomeIcon icon={faUserGroup} />}
                />

                <MenuItem
                    sidebar={sidebar}
                    title="Cabinet"
                    to={config.routes.cabinet}
                    icon={sidebar ? <FontAwesomeIcon icon={faBriefcase} width="2.5rem" /> : <FontAwesomeIcon icon={faBriefcase} />}
                />

                <MenuItem
                    sidebar={sidebar}
                    title="Device"
                    to={config.routes.device}
                    icon={sidebar ? <FontAwesomeIcon icon={faWrench} width="2.5rem" /> : <FontAwesomeIcon icon={faWrench} />}
                />

            </Menu>
            <Footer
                sidebar={sidebar}
                to={config.routes.dashboard}
                avatar={images.avatar}
                name='Thien Ân'
                job='Admin'
                icon={<FontAwesomeIcon icon={faRightFromBracket} />}
            />
        </aside>
    );
}

export default Sidebar;