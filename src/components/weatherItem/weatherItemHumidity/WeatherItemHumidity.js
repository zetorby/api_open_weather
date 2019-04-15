import React from 'react';

import style from './weatherItemHumidity.module.css';

const WeatherItemHumidity = (props) => {
    return (
        <span className={style.humidity}>
            {props.data ? `Humidity: ${props.data.humidity}%` : null}
        </span>
    )
}

export default WeatherItemHumidity;