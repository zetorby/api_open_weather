import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

let cities = [];

export const loadLocalStorage = () => {
    cities = [];
    for (let i = 0; i < localStorage.length; i++) {
        cities.push(localStorage.key(i))
    }
}

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
        return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return cities.filter(cities => regex.test(cities));
}

function getSuggestionValue(suggestion) {
    return suggestion;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion}</span>
    );
}

class AutoComplete extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, {newValue, method}) => {
        this.setState({
            value: newValue
        });
        this.props.handleInputChange(newValue)
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: "Enter city...",
            value,
            onChange: this.onChange,
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}/>
        );
    }
}

AutoComplete.propTypes = {
	handleInputChange:PropTypes.func
};

export default AutoComplete;

