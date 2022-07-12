import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <img src={images.logo} alt='Logo' className={cx('logo')} />
            </div>
            <div className={cx('info-wrapper')}>
                <span>
                    <FontAwesomeIcon icon={faUser} />
                </span>
            </div>
        </header>
    );
}

export default Header;