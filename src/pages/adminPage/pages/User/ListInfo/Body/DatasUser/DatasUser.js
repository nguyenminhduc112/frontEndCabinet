
import GlobalTable from "../GlobalTable/GlobalTable";


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
                name: 'Ân Qúa đẹp trai rồi',
                id: 'thienandeptraiquadilhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Cũng là Ân nhưng đẹp trai x10',
                id: 'thienandeptraix10lhu',
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
                name: 'Ân Qúa đẹp trai rồi',
                id: 'thienandeptraiquadilhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Cũng là Ân nhưng đẹp trai x10',
                id: 'thienandeptraix10lhu',
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
                name: 'Ân Qúa đẹp trai rồi',
                id: 'thienandeptraiquadilhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Cũng là Ân nhưng đẹp trai x10',
                id: 'thienandeptraix10lhu',
                email: 'thienan1804@lhu.edu.vn',
            },

        ]

    }


    return (

        <GlobalTable
            titles={dataU.titles}
            components={dataU.datas}
        />

    );
}

export default DatasUser;