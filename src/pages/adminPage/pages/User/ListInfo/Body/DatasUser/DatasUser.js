import classNames from "classnames/bind";
import styles from './DatasUser.module.scss';
import GlobalTable from "../GlobalTable/GlobalTable";


const cx = classNames.bind(styles)

function DatasUser() {
    // Chưa có API nên gắn cứng data

    // const [value, setValue] = useState('')
    // const [values, setValues] = useState([])

    const dataU = {
        titles: [
            'Tên',
            'ID Người Dùng',
            'E-mail',
        ],
        datas: [
            {
                key: Math.random(),
                name: 'Ân Thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân Thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân Thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân Thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Thiên Ân',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân Thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân Thiên',
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
            />
        </div>
    );
}

export default DatasUser;