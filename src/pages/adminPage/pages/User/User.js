import classNames from "classnames/bind";
import styles from './User.module.scss';

import ListInfo from './ListInfo';


const cx = classNames.bind(styles)

function User() {


    return (
        <div className={cx('wrapper')}>
            <ListInfo />
        </div>
    );
}

export default User;