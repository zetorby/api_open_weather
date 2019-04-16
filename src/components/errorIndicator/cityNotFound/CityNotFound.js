import React from 'react';
import PropTypes from 'prop-types';

import style from './cityNotFound.module.css';


const CityNotFound = (props) => {
    return (
        <span className={style.not_found}>
            City
                <span className={style.city}>
                    {props.city}
                </span>
            {props.responseErrorText}
        </span>
    );
};

CityNotFound.propTypes = {
	city:PropTypes.string
};

export default CityNotFound;