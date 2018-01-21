import {
    FETCHING_POSTS,
    FETCHING_POSTS_SUCCESS,
    FETCHING_POSTS_FAILURE
} from './constants';
import axios from 'axios';

export function fetchPostsFromAPI() {
    return (dispatch) => {
        dispatch(getPosts());
        axios.get('https://api.reddit.com/r/pics/new.json')
            .then(res => {
                 const data =res.data.data.children.map((item) => {
                    return {
                        id: item.data.id,
                        url: item.data.url,
                        thumbnail: item.data.thumbnail,
                        author: item.data.author,
                        title: item.data.title,
                        comments: item.data.num_comments,
                        score: item.data.score,
                        created: item.data.created_utc
                    }
                });
                dispatch(getPostsSuccess(data));
            })
            .catch((err) => {
                dispatch(getPostsFailure(err));
            })
    }
}

function getPosts() {
    return {
        type: FETCHING_POSTS
    }
}

function getPostsSuccess(data) {
    return {
        type: FETCHING_POSTS_SUCCESS,
        data
    }
}

function getPostsFailure(error) {
    return {
        type: FETCHING_POSTS_FAILURE,
        error: error
    }
}
