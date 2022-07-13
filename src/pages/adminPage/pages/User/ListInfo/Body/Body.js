import HeadingTable from "../../../../../../globalComponents/HeadingTable";
import classNames from "classnames/bind";
import styles from './Body.module.scss';
import { Route, Routes, useNavigate } from "react-router-dom";
import DatasUser from "./DatasUser";
import DatasAdmin from "./DatasAdmin";
import { useState } from "react";
const cx = classNames.bind(styles)

function Body({ className, green }) {
    const navigate = useNavigate();

    const [active, setActive] = useState(true)

    const handleShowUInfo = (e) => {
        e.preventDefault();
        navigate("inventory/userInfo");
        setActive(true)
    };

    const handleShowAInfo = (e) => {
        e.preventDefault();
        navigate("inventory/adminInfo");
        setActive(false)
    };
    return (
        <div className={cx('wrapper')}>
            <HeadingTable heading='Danh sách thông tin' />
            <div className={cx('prevTable')}>
                <button className={active ? cx('green') : cx('btn-show')} onClick={handleShowUInfo}>Người dùng</button>
                <button className={!active ? cx('green') : cx('btn-show')} onClick={handleShowAInfo}>Admin</button>
            </div>

            <Routes>
                <Route path="/inventory/">
                    <Route path="adminInfo" element={<DatasAdmin />} />
                </Route>
            </Routes>
            {active ? <DatasUser /> : false}
        </div>
    );
}

export default Body;