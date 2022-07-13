import classNames from "classnames/bind";
import styles from './GlobalTable.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function GlobalTable({
    titles,
    components,
}) {
    return (
        <table className={cx('wrapper')}>
            <thead>
                <tr className={cx('tr')}>
                    {titles.map((title, index) => (
                        <th className={cx('th')} key={index}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {components.map((component, index) => (
                    <tr className={index % 2 !== 0 ? cx('tr') : cx('even')}>
                        <td>
                            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                            {component.name}
                        </td>
                        <td>{component.id}</td>
                        <td>
                            {component.email}
                            <div className={cx('btn-wrapper')}>
                                <button className={cx('btn', 'green')}>Sửa</button>
                                <button className={cx('btn', 'red')}>Xóa</button>
                            </div>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GlobalTable;