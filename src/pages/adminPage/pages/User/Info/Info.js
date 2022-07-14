
import classNames from "classnames/bind";
import styles from './Info.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import images from "../../../../../assets/images";

const cx = classNames.bind(styles)

function Info({ title, id }) {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                <span className={cx('name')}>{title}</span>
                <span className={cx('id')}>ID: {id}</span>
            </div>
            <img src={images.logoLight} className={cx('logo-img')} alt='logo' />
        </div>
    );
}

export default Info;