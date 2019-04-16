import React from 'react';

import style from './buttonToggleTemperature.module.css';
import PropTypes from 'prop-types';


const ButtonToggleTemperature = (props) => {

    let temp
    if (props.data) {
        return temp = (
            <React.Fragment>
			<span className={style.btn}
                  onClick={props.handleToggleTemperature}>
				{props.state ? 'Celsius' : 'Fahrenheit'}
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

ButtonToggleTemperature.propTypes = {
	data:PropTypes.object,
	handleToggleTemperature:PropTypes.func
};

export default ButtonToggleTemperature;