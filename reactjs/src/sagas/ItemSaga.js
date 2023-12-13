import { put,takeEvery } from "@redux-saga/core/effects";
import * as actions from '../actions/ItemPageAction'
import * as types from '../constants'
import callApi from '../fetchAPIs/callAPI'
import addApi from "../fetchAPIs/addApi";
function* getItem(){
    try {
        const res=yield callApi('GET','')
        yield put(actions.getItemSuccess({res:res.data}))
    } catch (error) {
        yield put(actions.getItemFailure(error))
    }
}
function* importItem(data){
    try {
        let form= new FormData()
        for(let i=0;i<data.payload.file.length;i++){
            form.append('file',data.payload.file[i])
        }
       yield addApi(form)
       yield put(actions.importItemSucess())
       yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.importItemFailure(error))
    }
}
function* deleteItem(data){
    try {
        yield callApi('DELETE',`${data.payload}`)
        yield put(actions.deleteSucess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}
function* addItem(data){
    try {
        yield callApi('POST',`add`,data.payload)
        yield put(actions.addSucess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.addFailure(error))
    }
}
function* updateItem(data) {
    try {
        yield callApi('PUT',`${data.payload.id}`,data.payload)
        yield put(actions.updateSucess())
        yield put(actions.getItemRequest())
    } catch (error) {
        yield put(actions.updateFailure(error))
    }
}

export const ItemSaga=[takeEvery(types.GET_ITEM_REQUEST,getItem),
                        takeEvery(types.IMPORT_ITEM_REQUEST,importItem),
                        takeEvery(types.DELETE_ITEM_REQUEST,deleteItem),
                        takeEvery(types.ADD_ITEM_REQUEST,addItem),
                        takeEvery(types.UPDATE_ITEM_REQUEST,updateItem)]