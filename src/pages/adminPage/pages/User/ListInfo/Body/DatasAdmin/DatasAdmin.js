import classNames from "classnames/bind";
import styles from './DatasAdmin.module.scss';
import GlobalTable from "../GlobalTable/GlobalTable";

const cx = classNames.bind(styles)

function DatasAdmin() {
    const dataU = {
        titles: [
            'Tên',
            'ID Người Dùng',
            'E-mail',
        ],
        datas: [
            {
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Minh Đức',
                id: 'minhduclhu',
                email: 'minhduc@lhu.edu.vn',
            },
            {
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thien@lhu.edu.vn',
            },
            {
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Minh Đức',
                id: 'minhduclhu',
                email: 'minhduc@lhu.edu.vn',
            },
            {
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thien@lhu.edu.vn',
            },
            {
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Minh Đức',
                id: 'minhduclhu',
                email: 'minhduc@lhu.edu.vn',
            },
            {
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thien@lhu.edu.vn',
            },
        ]

    }
    return (
        <div className={cx('wrapper')}>
            <GlobalTable
                titles={dataU.titles}
                components={dataU.datas}
                key={dataU.titles}
            />
        </div>
    );
}

export default DatasAdmin;