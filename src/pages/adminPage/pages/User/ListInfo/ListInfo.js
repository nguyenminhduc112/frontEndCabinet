import classNames from "classnames/bind";
import styles from './ListInfo.module.scss';

import Header from "./Header";
import Body from "./Body";


const cx = classNames.bind(styles)

function ListInfo() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Body />
        </div>
    );
}

export default ListInfo;