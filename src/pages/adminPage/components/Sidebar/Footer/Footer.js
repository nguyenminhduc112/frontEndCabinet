import classNames from "classnames/bind";
import styles from './Footer.module.scss';

import { NavLink } from 'react-router-dom';

import Avatar from "../../../../../globalComponents/Avatar";
const cx = classNames.bind(styles)

function Footer({ avatar, name, job, icon, to, sidebar }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile')}>
                <div className={cx(sidebar ? 'profile-details' : 'activeProfileDetails')}>
                    <Avatar small src={avatar} />
                    <div className={cx('name-job')}>
                        <div className={cx('name')}>{name}</div>
                        <div className={cx('job')}>{job}</div>
                    </div>
                </div>
                <NavLink to={to}>
                    <span className={cx(sidebar ? 'icon' : 'activeIcon')}>{icon}</span>
                </NavLink>
            </div>
        </div >
    );
}

export default Footer;