import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, responseErrorText} from '../reducers/items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    responseErrorText
})