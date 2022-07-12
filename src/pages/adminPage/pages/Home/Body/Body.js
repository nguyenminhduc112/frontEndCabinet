import classNames from "classnames/bind";
import styles from './Body.module.scss';

const cx = classNames.bind(styles)

function Body() {
    return (
        <div className={cx('wrapper')}>
            <h2>Body</h2>
        </div>
    );
}

export default Body;