import {
    SET_VIDEOS,
    SET_SEARCH_TERM,
} from '../actions/types';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return {
                ...state,
                videos: action.payload,
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            return state;
    }
}