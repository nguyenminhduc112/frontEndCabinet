import classNames from "classnames/bind";
import styles from './Info.module.scss';


const cx = classNames.bind(styles)

function Info() {
    return (
        <div className={cx('wrapper')}>
            <h2> Info Page</h2>
        </div>
    );
}

export default Info;