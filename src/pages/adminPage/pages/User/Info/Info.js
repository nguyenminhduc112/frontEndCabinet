
import classNames from "classnames/bind";
import styles from './Info.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { LogoIcon } from '../../../../../globalComponents/Icon'

const cx = classNames.bind(styles)

function Info() {



    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                <span className={cx('name')}>Thiên Ân</span>
                <span className={cx('id')}>ID: phuocphanlhu</span>
            </div>
            <div className={cx('logo')}>
                <LogoIcon className={cx('logo-img')} />
                <span className={cx('logo-name')}>LHU B304 LAB</span>
            </div>
        </div>
    );
}

export default Info;