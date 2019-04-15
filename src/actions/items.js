export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool,
    }
}

export function responseErrorText(text) {
    return {
        type: 'RESPONSE_ERROR_TEXT',
        text
    }
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    }
}

export function itemsFetchData(city) {
    const API_URL = 'http://api.openweathermap.org/data/2.5/';
    const API_KEY = '035dbcfcf47bf628b716a6443336475f';
    let url = `${API_URL}weather?q=${city}&appid=${API_KEY}`;

    return (dispatch) => {
        dispatch(itemsIsLoading(true))

        fetch(url, {method: 'get'})
            .then((response) => {
                if (!response.ok) {
                    dispatch(itemsIsLoading(false));
                    dispatch(responseErrorText(response.statusText));
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response
            })
            .then(response => {
                return response.json()
            })
            .then((items) => {
                return dispatch(itemsFetchDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}