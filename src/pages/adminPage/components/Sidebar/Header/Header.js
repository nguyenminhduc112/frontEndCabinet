import classNames from "classnames/bind";
import styles from './Header.module.scss';

const cx = classNames.bind(styles)

function Header({ icon, title, img, sidebar, showSidebar }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx(sidebar ? 'logo' : 'logoActive')}>
                <img className={cx('logo-img')} src={img} alt='Thien An' />
                <div className={cx('logo-name')}>{title}</div>
            </div>
            <i className={cx(sidebar ? 'btn-menu' : 'btnActive')} onClick={showSidebar} >{icon}</i>
        </div>
    );
}

export default Header;