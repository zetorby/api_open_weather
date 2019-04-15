import React from 'react';

import style from './buttonToggleTemperature.module.css';

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

export default ButtonToggleTemperature;