import classNames from "classnames/bind";
import styles from './Box.module.scss';

const cx = classNames.bind(styles)

function Box({ blue = true, purple = true, orange = true, green = true, className, }) {
    const statistics = [
        // Số lượng và thiết bị tạm thời gắn cứng
        {
            title: 'Thiết bị được mượn nhiều nhất',
            boxNumber: '20 Lần',
            boxTitle: 'MACBOOK AIR M1',
            color: cx('box', {
                [className]: className,
                blue,
            }),
        },
        {
            title: 'Người dùng tích cực: Smart Things 01',
            boxNumber: '5 Lượt',
            boxTitle: '28 NGÀY VỪA QUA',
            color: cx('box', {
                [className]: className,
                purple,
            }),
        },
        {
            title: 'Thống kê trả thiết bị',
            boxNumber: '100%',
            boxTitle: 'ĐƯỢC HOÀN TRẢ',
            color: cx('box', {
                [className]: className,
                orange,
            }),
        },
        {
            title: 'Thống kê mất thiết bị',
            boxNumber: '0%',
            boxTitle: 'BỊ MẤT THIẾT BỊ',
            color: cx('box', {
                [className]: className,
                green,
            }),
        },
    ]



    return (
        <>
            {
                statistics.map((statistic, index) => (
                    <div className={cx('wrapper')}>
                        <span className={cx('title')}>{statistic.title}</span>
                        <div className={statistic.color}>
                            <span className={cx('box-number')}>{statistic.boxNumber}</span>
                            <span className={cx('box-title')}>{statistic.boxTitle}</span>
                        </div>
                    </div>

                ))
            }
        </>

    );
}

export default Box;