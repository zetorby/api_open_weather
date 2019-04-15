import React from 'react';

import style from "./weatherItemWind.module.css";

const WeatherItemWind = (props) => {
    return(
        <span className={style.wind}>
            {props.data ? `Wind: ${props.data.speed} meter/sec` : null}
        </span>
    )
}

export default WeatherItemWind;