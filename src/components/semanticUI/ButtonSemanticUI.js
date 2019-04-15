import React from 'react'
import {Button} from 'semantic-ui-react'

const ButtonSemanticUI = (props) => {
    return (
        <Button onKeyDown={props.handleKeyDown}
                onClick={props.handleSubmit}>
            Weather
        </Button>
    )
}

export default ButtonSemanticUI