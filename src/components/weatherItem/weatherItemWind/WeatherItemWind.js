import React from 'react';
import PropTypes from 'prop-types';

import style from './weatherItemWind.module.css';

const WeatherItemWind = (props) => {
    return(
        <span className={style.wind}>
            {props.data ? `Wind: ${props.data.speed} meter/sec` : null}
        </span>
    )
}

WeatherItemWind.propTypes = {
	data:PropTypes.object
};

export default WeatherItemWind;