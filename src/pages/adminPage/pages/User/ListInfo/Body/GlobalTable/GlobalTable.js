import classNames from "classnames/bind";
import styles from './GlobalTable.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import Info from "../../../Info";


const cx = classNames.bind(styles)

function GlobalTable({ titles, components, }) {

    const [firstActive, setFirstActive] = useState(true)

    const [nameValue, setNameValue] = useState(components[0].name)

    const [idValue, setIdValue] = useState(components[0].id)
    return (
        <div className={cx('container')}>
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
                            style={{
                                // eslint-disable-next-line no-unused-expressions
                                backgroundColor: index === 0 && firstActive ? '#00aeff' : '',
                                color: index === 0 && firstActive ? "var(--white)" : ''
                            }}
                            tabIndex="0"
                            onClick={() => {
                                setNameValue(component.name)
                                setIdValue(component.id)
                                setFirstActive(false)
                            }}
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
            <Info title={nameValue} id={idValue} />
        </div >
    );
}

export default GlobalTable;