
import GlobalTable from "../GlobalTable/GlobalTable";



function DatasAdmin() {
    const dataU = {
        titles: [
            'Tên',
            'ID Người Dùng',
            'E-mail',
        ],
        datas: [
            {
                key: Math.random(),
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Minh Đức',
                id: 'minhduclhu',
                email: 'minhduc@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thien@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Minh Đức',
                id: 'minhduclhu',
                email: 'minhduc@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thien@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thienan1804@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Minh Đức',
                id: 'minhduclhu',
                email: 'minhduc@lhu.edu.vn',
            },
            {
                key: Math.random(),
                name: 'Ân thiên',
                id: 'thienanlhu',
                email: 'thien@lhu.edu.vn',
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

export default DatasAdmin;