import React from 'react';
import PropTypes from 'prop-types';

const WeatherItemIcon = (props) => {

    let iconUrl = '';
    let imgTags = '';

    if (props.data) {
        iconUrl = `http://openweathermap.org/img/w/${props.data[0].icon}.png`
        return imgTags = <img src={iconUrl} alt={props.data[0].description}/>
    }
    return (
        <div>
            {imgTags}
        </div>
    )
}

WeatherItemIcon.propTypes = {
	data:PropTypes.array
};

export default WeatherItemIcon;