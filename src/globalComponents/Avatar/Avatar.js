import { useState, forwardRef } from 'react';
import classNames from "classnames/bind";
import styles from './Avatar.module.scss';
import images from "../../assets/images";

const cx = classNames.bind(styles)


const Avatar = forwardRef(({
    src,
    alt,
    className,
    fallback: customFallback = images.noImage,
    small = false,
    large = false,
    ...props },
    ref,
) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    const classes = cx('avatar', {
        [className]: className,
        small,
        large
    })


    return (
        <img
            className={classes}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
})

export default Avatar;