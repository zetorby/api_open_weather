import React from 'react';

import style from './weatherItemHumidity.module.css';
import PropTypes from 'prop-types';

const WeatherItemHumidity = (props) => {
    return (
        <span className={style.humidity}>
            {props.data ? `Humidity: ${props.data.humidity}%` : null}
        </span>
    )
}

WeatherItemHumidity.propTypes = {
	data:PropTypes.object
};

export default WeatherItemHumidity;