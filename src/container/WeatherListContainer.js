import React from 'react';
import {connect} from 'react-redux';

import {itemsFetchData} from '../actions/items';
import WeatherList from '../components/weatherList';

const WeatherListContainer = (props) => {
    return (
        <WeatherList  {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        responseErrorText: state.responseErrorText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (city) => dispatch(itemsFetchData(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherListContainer);