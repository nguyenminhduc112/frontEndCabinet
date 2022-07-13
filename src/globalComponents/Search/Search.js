import classNames from "classnames/bind";
import styles from './Search.module.scss';

import { CloseIcon, LoadIcon, SearchIcon } from '../Icon'

const cx = classNames.bind(styles)


function Search() {
    return (
        <div className={cx('search')}>
            <input
                placeholder="Tìm kiếm thông tin"
                spellCheck={false}
            />
            <button className={cx('clear')}>
                <CloseIcon />
            </button>
            <LoadIcon className={cx('loading')} />
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;