import * as types from '../constants'

export function getItemRequest(payload){
    return{
        type: types.GET_ITEM_REQUEST,
        payload
    }
}
export function getItemSuccess(payload){
    return{
        type: types.GET_ITEM_SUCCESS,
        payload
    }
}
export function getItemFailure(payload){
    return{
        type: types.GET_ITEM_FAILURE,
        payload
    }
}
//add
export function addRequest(payload){
    return{
        type: types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addSucess(payload){
    return{
        type: types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addFailure(payload){
    return{
        type: types.ADD_ITEM_FAILURE,
        payload
    }
}
//delete
export function deleteRequest(payload){
    return{
        type: types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function deleteSucess(payload){
    return{
        type: types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function deleteFailure(payload){
    return{
        type: types.DELETE_ITEM_FAILURE,
        payload
    }
}
//update
export function updateRequest(payload){
    return{
        type: types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateSucess(payload){
    return{
        type: types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateFailure(payload){
    return{
        type: types.UPDATE_ITEM_FAILURE,
        payload
    }
}

export function importItemRequest(payload){
    return{
        type: types.IMPORT_ITEM_REQUEST,
        payload
    }
}
export function importItemSucess(payload){
    return{
        type: types.IMPORT_ITEM_SUCCESS,
        payload
    }
}
export function importItemFailure(payload){
    return{
        type: types.IMPORT_ITEM_FAILURE,
        payload
    }
}

