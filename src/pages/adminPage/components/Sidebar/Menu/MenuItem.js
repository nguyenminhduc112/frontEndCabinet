import { useEffect, useRef } from 'react';
import classNames from "classnames/bind";
import styles from './Menu.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon, sidebar, onClick }) {
    const ref = useRef(null);
    const props = {
        onClick
    }

    useEffect(() => {
        if (ref.current.classList.contains('active')) {
            delete props.onClick

        }
    }, [props.onClick]);


    const handleDisabled = (e) => {
        if (e.currentTarget.classList.contains(cx('menu-item'))) {
            delete props.onClick
        }
    }
    return (
        <NavLink
            to={to}
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            ref={ref}
            onClick={handleDisabled}
            {...props}
        >
            <span className={cx(sidebar ? 'icon' : 'sidebarSmallIcon')}>{icon}</span>
            <span className={cx(sidebar ? 'title' : 'active')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;