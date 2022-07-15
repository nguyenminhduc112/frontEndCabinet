import { useState } from "react";
import classNames from "classnames/bind";
import styles from './GlobalTable.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Info from "../../../Info";
import PopupModal from "../../../../../../../globalComponents/PopupModal/PopupModal";


const cx = classNames.bind(styles)

function GlobalTable({ titles, components }) {
    const [firstActive, setFirstActive] = useState(true)

    const [nameValue, setNameValue] = useState(components[0].name)

    const [idValue, setIdValue] = useState(components[0].id)

    const [emailValue, setEmailValue] = useState(components[0].email)

    const [popUp, setPopUp] = useState(false)
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
                                backgroundColor: index === 0 && firstActive ? '#00aeff' : '',
                                color: index === 0 && firstActive ? "var(--white)" : ''
                            }}
                            tabIndex="0"
                            onClick={() => {
                                setNameValue(component.name)
                                setIdValue(component.id)
                                setEmailValue(component.email)
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
                                    <button
                                        className={cx('btn', 'green')}
                                        onClick={() => {
                                            setPopUp(true)
                                        }}
                                    >Sửa</button>
                                    <button className={cx('btn', 'red')}>Xóa</button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Info title={nameValue} id={idValue} />
            {popUp ? <PopupModal
                setPopUp={setPopUp}
                name={nameValue}
                id={idValue}
                email={emailValue}
            /> : false}
        </div >
    );
}

export default GlobalTable;