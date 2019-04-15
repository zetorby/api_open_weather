import React from 'react';

import style from './weatherItemTitle.module.css';

const WeatherItemTitle = (props) => {
    return (
        <h3 className={style.title}>
            {props ? props.data : null}
        </h3>
    )
}

export default WeatherItemTitle;