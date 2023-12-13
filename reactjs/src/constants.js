// domain
export const DOMAIN = "http://localhost:3001/item/";
// export const DOMAIN;
export const LIMIT = 3;

// HTTP method 
export const HTTP_READ = "GET"
export const HTTP_CREATE = "POST"
export const HTTP_UPDATE = "PUT"
export const HTTP_DELETE = "DELETE"

// HTTP headers
export const HTTP_HEADER_JSON = {"Content-Type": "Application/json"}

// types of actions
//paginate
export const GET_ITEM_REQUEST='GET_ITEM_REQUEST'
export const GET_ITEM_SUCCESS='GET_ITEM_SUCCESS'
export const GET_ITEM_FAILURE='GET_ITEM_FAILURE'

//ADD
export const ADD_ITEM_REQUEST='ADD_ITEM_REQUEST'
export const ADD_ITEM_SUCCESS='ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE='ADD_ITEM_FAILURE'
//DELETE
export const DELETE_ITEM_REQUEST='DELETE_ITEM_REQUEST'
export const DELETE_ITEM_SUCCESS='DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE='DELETE_ITEM_FAILURE'
//update
export const UPDATE_ITEM_REQUEST='UPDATE_ITEM_REQUEST'
export const UPDATE_ITEM_SUCCESS='UPDATE_ITEM_SUCCESS'
export const UPDATE_ITEM_FAILURE='UPDATE_ITEM_FAILURE'
//search-paginate
export const IMPORT_ITEM_REQUEST='IMPORT_ITEM_REQUEST'
export const IMPORT_ITEM_SUCCESS='IMPORT_ITEM_SUCCESS'
export const IMPORT_ITEM_FAILURE='IMPORT_ITEM_FAILURE'
