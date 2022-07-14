import classNames from "classnames/bind";
import styles from './GlobalTable.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";



const cx = classNames.bind(styles)

function GlobalTable({ titles, components, }) {


    return (
        <>
            <table className={cx('wrapper')}>
                <thead>
                    <tr className={cx('tr-head')}>
                        {titles.map((title, index) => (
                            <th className={cx('th')} key={index}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {components.map((component, index) => (
                        <tr
                            key={component.key}
                            className={index % 2 !== 0 ? cx('tr') : cx('even')}
                            tabIndex="0"

                        >
                            <td>
                                <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                                {component.name}
                            </td>
                            <td>{component.id}</td>
                            <td>
                                <span className={cx('email')}>
                                    {component.email}
                                </span>
                                <div className={cx('btn-wrapper')}>
                                    <button className={cx('btn', 'green')}>Sửa</button>
                                    <button className={cx('btn', 'red')}>Xóa</button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default GlobalTable;