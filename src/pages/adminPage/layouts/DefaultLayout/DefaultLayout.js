import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('content')}>
                <Header />
                <div className={cx('body')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;