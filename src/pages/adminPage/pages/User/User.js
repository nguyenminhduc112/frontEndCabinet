import classNames from "classnames/bind";
import styles from './User.module.scss';

import ListInfo from './ListInfo';
import Info from './Info';

const cx = classNames.bind(styles)

function User() {
    return (
        <div className={cx('wrapper')}>
            <ListInfo />
            <Info />
        </div>
    );
}

export default User;