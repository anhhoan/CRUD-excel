import * as types from '../constants'
const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
        case types.ADD_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                dataFetched: false,
                isFetching: true
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                dataFetched: true,
                isFetching: false,
                listItem: action.payload.res,
                error: false,
                errorMessage: null
            }
        case types.ADD_ITEM_SUCCESS:
        case types.DELETE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                dataFetched: true,
                isFetching: false,
                error: false,
                errorMessage: null
            }
        case types.GET_ITEM_FAILURE:
        case types.ADD_ITEM_FAILURE:
        case types.DELETE_ITEM_FAILURE:
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                dataFetched: false,
                isFetching: false,
                error: true,
                errorMessage: action.payload.error
            }
        default:
            return state

    }
}