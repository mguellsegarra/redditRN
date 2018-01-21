import {
    FETCHING_POSTS,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAILURE
} from '../redux/constants';

const initialState = {
    loading: false,
    data: [],
    error: null,
    refreshing: false,
    sort: 'new',
    modalIsVisible: false
}

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_POSTS: {
            return {
                ...state, 
                loading: true,
                data: []
            }
            break;
        }
        case FETCHING_POSTS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
            break;
        }
        case FETCHING_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data
            }
            break;
        }
    }
}