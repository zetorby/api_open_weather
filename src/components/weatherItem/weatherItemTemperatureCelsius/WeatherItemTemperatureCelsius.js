import React from 'react';

import style from './weatherItemTemperature.module.css';
import PropTypes from 'prop-types';

const WeatherItemTemperatureCelsius = (props) => {
    let temp
    if (props.data) {
        return temp = (
            <React.Fragment>
                <span className={style.temp}>{Math.floor(props.data.temp - 273.15)}</span>
                <span className={style.active}>
                        &#176;C
                    </span>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {temp}
        </React.Fragment>

    )
}

WeatherItemTemperatureCelsius.propTypes = {
	data:PropTypes.object
};

export default WeatherItemTemperatureCelsius;