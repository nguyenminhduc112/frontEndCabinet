import classNames from "classnames/bind";
import styles from './Header.module.scss';

const cx = classNames.bind(styles)

function Header({ icon, title, img }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img className={cx('logo-img')} src={img} alt='Thien An' />
                <div className={cx('logo-name')}>{title}</div>
            </div>
            <span className={cx('btn-menu')}>{icon}</span>
        </div>
    );
}

export default Header;