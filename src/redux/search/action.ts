import axios from "axios";

import {
    GET_SEARCH_RESULT_REQUEST,
    GET_SEARCH_RESULT_SUCCESS,
    GET_SEARCH_RESULT_FAIL,
    GET_RETRIEVE_RESULT_REQUEST,
    GET_RETRIEVE_RESULT_SUCCESS,
    GET_RETRIEVE_RESULT_FAIL,
} from "./actionType"

export const getSearchResults = (query: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: GET_SEARCH_RESULT_REQUEST
        })
        try {
            const searchResponse = await axios.get(`${process.env.REACT_APP_HOST}/search?search=${query}`);
            dispatch({
                type: GET_SEARCH_RESULT_SUCCESS,
                payload: searchResponse.data.data
            })
        } catch {
            dispatch({
                type: GET_SEARCH_RESULT_FAIL
            })
        }
    }
}

export const getRetrieveResults = (detailId: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: GET_RETRIEVE_RESULT_REQUEST
        })
        try {
            const retrieveResponse = await axios.get(`${process.env.REACT_APP_HOST}/retrieve?detailId=${detailId}`);
            console.log(retrieveResponse);
            dispatch({
                type: GET_RETRIEVE_RESULT_SUCCESS,
                payload: retrieveResponse.data.data
            })
        } catch {
            dispatch({
                type: GET_RETRIEVE_RESULT_FAIL
            })
        }
    }
}