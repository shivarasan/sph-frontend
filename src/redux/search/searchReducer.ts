import { details } from "../../typings/app.d";
import { searchResult } from "../../typings/app.d";
import {
    GET_SEARCH_RESULT_REQUEST,
    GET_SEARCH_RESULT_SUCCESS,
    GET_SEARCH_RESULT_FAIL,
    GET_RETRIEVE_RESULT_REQUEST,
    GET_RETRIEVE_RESULT_SUCCESS,
    GET_RETRIEVE_RESULT_FAIL,
} from "./actionType"

interface searchResultState {
    searchResults: Array<searchResult> | null;
    isSearchFailed: boolean;
    retrieveData?: details | null;
    isRetrieveFailed: boolean;
}

const INITIAL_STATE: searchResultState = {
    searchResults: null,
    isSearchFailed: false,
    retrieveData: null,
    isRetrieveFailed: false,
}

type Action = { type: string; payload: any };

const searchReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case GET_SEARCH_RESULT_REQUEST:
            return { ...INITIAL_STATE, isSearchFailed: false, searchResults: null };
        case GET_SEARCH_RESULT_SUCCESS:
            return { ...INITIAL_STATE, searchResults: action.payload };
        case GET_SEARCH_RESULT_FAIL:
            return { ...INITIAL_STATE, isSearchFailed: true };
        case GET_RETRIEVE_RESULT_REQUEST:
            return { ...INITIAL_STATE, retrieveData: null, isRetrieveFailed: false };
        case GET_RETRIEVE_RESULT_SUCCESS:
            return { ...INITIAL_STATE, retrieveData: action.payload };
        case GET_RETRIEVE_RESULT_FAIL:
            return { ...INITIAL_STATE, isRetrieveFailed: true };
        default:
            return state;
    }
};

export default searchReducer;


