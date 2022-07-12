import classNames from "classnames/bind";
import styles from './Header.module.scss';

import Box from "./components/Box";
const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Box />
        </div>
    );
}

export default Header;