import { useState } from "react";
import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className={cx('wrapper')}>
            <Sidebar
                sidebar={sidebar}
                setSidebar={setSidebar}
                showSidebar={showSidebar}
            />
            <div className={cx(sidebar ? 'content' : 'active')}>
                <Header />
                <div className={cx('body')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;