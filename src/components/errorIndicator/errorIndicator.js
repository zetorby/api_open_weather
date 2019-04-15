import React from 'react';

import style from './errorIndicator.module.css';

const ErrorIndicator = () => {
    return (
        <div className={style.error_indicator}>
            <span className={style.boom}>BOOM!</span>
            <span className={style.error_text}>
                something has gone terribly wrong
            </span>
            <span className={style.error_text}>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;