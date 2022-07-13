import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import config from '../../../../config'
import Avatar from "../../../../globalComponents/Avatar";

const cx = classNames.bind(styles)

function Header() {
    const info = {
        avatar: images.avatar,
        title: 'LHU B304 LAB',
        dropDownIcon: <FontAwesomeIcon icon={faAngleDown} />,
    }
    return (
        <header className={cx('wrapper')}>
            <Link className={cx('logo-wrapper')} to={config.routes.dashboard}>
                <img src={images.logo} alt='Logo' className={cx('logo')} />
            </Link>
            <div className={cx('info-wrapper')}>
                <Avatar small src={info.avatar} alt='Admin' />
                <span className={cx('title')}>{info.title}</span>
                <span className={cx('iconDrop')}>{info.dropDownIcon}</span>
            </div>
        </header >
    );
}

export default Header;