import classNames from "classnames/bind";
import styles from './Body.module.scss';
import TableData from "../../../components/TableData";
import HeadingTable from "../../../../../globalComponents/HeadingTable";

const cx = classNames.bind(styles)

function Body() {
    const tblDatas = {
        // Vì chưa có API nên tạm thời gắn cứng datas
        title: [
            'Tên thiết bị',
            'Số lượng mượn',
            'Thời gian mượn',
            'Vị trí',
            'Trạng thái',
        ],

        datas: [
            {
                device: 'Mackbook Air 1',
                quantity: 2,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: true,
            },
            {
                device: 'Mackbook Air 2',
                quantity: 3,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: false,
            },
            {
                device: 'Mackbook Air 1',
                quantity: 2,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: true,
            },
            {
                device: 'Mackbook Air 2',
                quantity: 3,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: false,
            },
            {
                device: 'Mackbook Air 1',
                quantity: 2,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: true,
            },
            {
                device: 'Mackbook Air 2',
                quantity: 3,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: false,
            },
            {
                device: 'Mackbook Air 1',
                quantity: 2,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: true,
            },
            {
                device: 'Mackbook Air 2',
                quantity: 3,
                time: '9:30 AM - 18/04/2003',
                name: 'Tủ 1',
                state: false,
            },
        ]

    }

    return (
        <div className={cx('wrapper')} >
            <HeadingTable
                heading='Danh sách thống kê'
                marginLeft
            />
            <TableData
                tblDataTitles={tblDatas.title}
                components={tblDatas.datas}
                key={tblDatas.title}

            />
        </div>
    );
}

export default Body;