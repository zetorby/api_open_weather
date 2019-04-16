import React from 'react';

import style from './weatherItemTemperature.module.css';
import PropTypes from 'prop-types';

const WeatherItemTemperatureFahrenheit = (props) => {
    let temp
    if (props.data) {
        return temp = (
            <React.Fragment>
                <span className={style.temp}>{Math.floor((props.data.temp - 273.15) * 9 / 5 + 32)}</span>
                <span className={style.active}>
                        &#176;F
                    </span>
            </React.Fragment>
        )
    }
    return (
        <>
            {temp}
        </>

    )
}

WeatherItemTemperatureFahrenheit.propTypes = {
	data:PropTypes.object
};

export default WeatherItemTemperatureFahrenheit;