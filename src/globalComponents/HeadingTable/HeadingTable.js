import classNames from "classnames/bind";
import styles from './HeadingTable.module.scss';


const cx = classNames.bind(styles)

function HeadingTable({ heading, marginLeft, className }) {

    const classes = cx('header', {
        [className]: className,
        marginLeft,
    })

    return (
        <div className={classes}>{heading}</div>
    );
}

export default HeadingTable;