
import { useState } from "react";
import classNames from "classnames/bind";
import styles from './PopupModal.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function PopupModal({ setPopUp, name, id, email }) {
    const [nameEdit, setNameEdit] = useState(name)
    const [idEdit, setIdEdit] = useState(id)
    const [emailEdit, setEmailEdit] = useState(email)

    const handleSaveEdit = () => {
        // Handle Logic Save
        setPopUp(false)
    }

    const handleClose = () => {
        setPopUp(false)
    }
    return (
        <div className={cx('wrapper')} onClick={() => setPopUp(false)}>
            <div className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
                <button className={cx('close-btn')} onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} className={cx('close-icon')} />
                </button>
                <header className={cx('header')}>
                    Sửa thông tin Người dùng
                </header>
                <div className={cx('body')}>
                    <label htmlFor='name' className={cx('label')}>
                        Tên
                    </label>
                    <input
                        value={nameEdit}
                        onChange={(e) => setNameEdit(e.target.value)}
                        type='text'
                        id="name"
                        className={cx('input')}
                        placeholder='Nhập Tên...'
                    />

                    <label htmlFor='id-user' className={cx('label')}>
                        ID Người dùng
                    </label>
                    <input
                        value={idEdit}
                        onChange={(e) => setIdEdit(e.target.value)}
                        type='text'
                        id="id-user"
                        className={cx('input')}
                        placeholder='Nhập Id...'
                    />

                    <label htmlFor='email' className={cx('label')}>
                        E-mail
                    </label>
                    <input
                        value={emailEdit}
                        onChange={(e) => setEmailEdit(e.target.value)}
                        type='text'
                        id="email"
                        className={cx('input')}
                        placeholder='Nhập Email...'
                    />
                    <button
                        className={cx('save-btn')}
                        onClick={handleSaveEdit}
                    >LƯU</button>
                </div>
            </div>

        </div>
    );
}

export default PopupModal;