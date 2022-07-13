import classNames from "classnames/bind";
import styles from './TableData.module.scss';

const cx = classNames.bind(styles)

function TableData({ tblDataTitles, components, className, }) {



    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                <thead className={cx('heading')}>
                    <tr>
                        {tblDataTitles.map(tblDataTitle => (
                            <th className={cx('title')}>{tblDataTitle}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {components.map(component => (
                        <tr className={cx('tr')}>
                            <td>
                                {component.device}
                            </td>
                            <td>
                                {component.quantity}
                            </td>
                            <td>
                                {component.time}
                            </td>
                            <td>
                                {component.name}
                            </td>

                            {!component.state ? (
                                <td className={cx('red')}>
                                    Chưa trả
                                </td>
                            ) : (
                                <td className={cx('green')}>
                                    Đã trả
                                </td>
                            )}

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default TableData;