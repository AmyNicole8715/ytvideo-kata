import { useState, useContext, useEffect, useReducer, createContext } from 'react';


import {
    SET_VIDEOS,
    SET_SEARCH_TERM
} from '../actions/types';
import { reducer } from '../reducers/reducers';
import youtube from '../apis/youtube/youtube';


const initialState = {
    videos: [],
    searchTerm: '',
};

export const DataContext = createContext({
    searchTerm: 'bad omens death of peace of mind',
});

export function DataProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [searchTerm, setSearchTerm] = useState('');


    // change movie title for youtube search
    const searchTermChange = (e) => {
        console.log(e.target.value + ' entered')
        setSearchTerm(e.target.value);
        dispatch ({ type: SET_SEARCH_TERM, payload: e });
    };

    // fetches movie trailer from youtube
    const fetchVideos = async (term) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term,
                    },
                });
            dispatch({
                type: SET_VIDEOS,
                payload: response.data.items[0].id.videoId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // checks if movie title is empty if not, then it fetches movie trailer
    useEffect(() => {
        if (searchTerm !== '') {
            fetchVideos(searchTerm);
        }
    }, [searchTerm]);



    return (
        <DataContext.Provider
            value={{
                ...state,
                searchTermChange,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};

export default DataProvider;