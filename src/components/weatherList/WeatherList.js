import React, {Component} from 'react';
import PropTypes from 'prop-types';

import WeatherItem from '../weatherItem';
import {loadLocalStorage} from '../autoComplete/AutoComplete';
import ButtonSemanticUI from '../semanticUI/ButtonSemanticUI';
import Spinner from '../spinner';
import AutoComplete from '../autoComplete';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ErrorIndicator from '../errorIndicator';
import CityNotFound from '../errorIndicator/cityNotFound';

import style from './weatherList.module.css';

class WeatherList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            city: '',
            responseErrorText: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.data !== nextProps.items) {
            return true
        } else if (this.state.responseErrorText !== nextProps.responseErrorText) {
            return true
        }
        return false
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.setState({
            data: nextProps.items,
            responseErrorText: nextProps.responseErrorText
        })
        this.saveLocalStorage(nextProps.items, nextProps.items.name)
    }

    saveLocalStorage = (obj, cityName) => {
        let name = cityName
        let serialObj = JSON.stringify(obj)
        localStorage.setItem(`${name}`, serialObj)
        loadLocalStorage()
    }
    handleSubmit = () => {
        this.props.fetchData(this.state.city)
    }
    handleInputChange = (event) => {
        this.setState({city: event})
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.fetchData(this.state.city)
        }
    }

    render() {
        let tags
        if (this.state.responseErrorText.length > 1) {
            tags = <CityNotFound responseErrorText={this.state.responseErrorText}
                                 city={this.state.city}/>
        } else {
            tags = <WeatherItem data={this.state.data}/>
        }

        if (this.props.hasErrored) {
            return <ErrorIndicator/>;
        }
        if (this.props.isLoading) {
            return <Spinner/>;
        }
        return (
            <div onKeyDown={this.handleKeyDown}
                 className={style.wrapper}>
                <div className={style.top_row}>
                    <ReactCSSTransitionGroup
                        transitionName="left"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <AutoComplete handleInputChange={this.handleInputChange}/>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName="right"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <ButtonSemanticUI handleSubmit={this.handleSubmit}/>
                    </ReactCSSTransitionGroup>
                </div>
                {tags}
            </div>
        );
    }
}

WeatherList.propTypes = {
	items:PropTypes.object,
};

export default WeatherList;
