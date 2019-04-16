import React from 'react'
import {Button} from 'semantic-ui-react'
import PropTypes from 'prop-types';

const ButtonSemanticUI = (props) => {
    return (
        <Button onKeyDown={props.handleKeyDown}
                onClick={props.handleSubmit}>
            Weather
        </Button>
    )
}

ButtonSemanticUI.propTypes = {
	handleKeyDown:PropTypes.func,
	handleSubmit:PropTypes.func
};

export default ButtonSemanticUI