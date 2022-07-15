import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from './Search.module.scss';
import { CloseIcon, LoadIcon, SearchIcon } from '../Icon'

import useDebounce from "../../hooks/useDebounce";

const cx = classNames.bind(styles)


function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 700);

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }
        setLoading(true)
        // Gọi API để tìm kiếm:...
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [debounced])

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }

    }


    return (
        <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Tìm kiếm thông tin"
                spellCheck={false}
                onChange={handleChange}
            />
            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={handleClear}>
                    <CloseIcon />
                </button>
            )}

            {loading && <LoadIcon className={cx('loading')} />}
            <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}  >
                <SearchIcon />
            </button>
        </div>

    );
}

export default Search;