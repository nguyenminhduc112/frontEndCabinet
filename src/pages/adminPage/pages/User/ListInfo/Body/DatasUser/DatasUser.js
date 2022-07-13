import classNames from "classnames/bind";
import styles from './DatasUser.module.scss';
import GlobalTable from "../GlobalTable/GlobalTable";


const cx = classNames.bind(styles)

function DatasUser() {
    // Chưa có API nên gắn cứng data
    const dataU = {
        titles: [
            'Tên',
            'ID Người Dùng',
            'E-mail',
        ],
        datas: [
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
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

export default DatasUser;