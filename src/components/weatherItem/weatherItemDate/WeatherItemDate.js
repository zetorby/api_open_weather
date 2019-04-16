import React from 'react';

import style from './weatherItemDate.module.css';
import * as moment from 'moment';
import PropTypes from 'prop-types';


const WeatherItemDate = (props) => {
    return (
        <span className={style.time}>
            {props.data ? moment(props.data * 1000).format('DD/MM/YYYY hh:mm A') : null}
        </span>
    )
}

WeatherItemDate.propTypes = {
	data:PropTypes.number
};

export default WeatherItemDate;