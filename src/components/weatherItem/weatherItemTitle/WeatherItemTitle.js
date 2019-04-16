import React from 'react';
import PropTypes from 'prop-types';

import style from './weatherItemTitle.module.css';


const WeatherItemTitle = (props) => {
    return (
        <h3 className={style.title}>
            {props ? props.data : null}
        </h3>
    )
}

WeatherItemTitle.propTypes = {
	data:PropTypes.string
};


export default WeatherItemTitle;