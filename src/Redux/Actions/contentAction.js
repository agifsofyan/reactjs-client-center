import Axios from 'axios';
import { SWAGGER_URL } from '../../Support/API_URL';
import {
    CONTENT_START,
    CONTENT_VIDEO_LIST,
    CONTENT_VIDEO_BY_ID,
    CONTENT_BLOG_LIST,
    CONTENT_BLOG_BY_ID,
    CONTENT_FAILED,
} from '../type';

const token = localStorage.getItem('token');

export const getVideo = () => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/uploads/media/list?fields=filetype&value=video`);
            dispatch({
                type: CONTENT_VIDEO_LIST,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};

export const getVideoById = (id) => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            let res = await Axios.get(`${SWAGGER_URL}/uploads/media/list?fields=filetype&value=video&optFields=_id&optVal=${id}`);
            dispatch({
                type: CONTENT_VIDEO_BY_ID,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};

export const getBlogList = () => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await Axios.get(`${SWAGGER_URL}/contents?offset=1&limit=10&fields=isBlog&value=true&sortby=created_at&sortval=desc`, options);
                dispatch({
                    type: CONTENT_BLOG_LIST,
                    payload: res.data.data,
                });
            }
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};

export const getBlogById = (id) => {
    return async dispatch => {
        dispatch({
            type: CONTENT_START,
        });
        try {
            if (token) {
                let options = {
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Authorization': `Bearer ${token}`,
                    },
                };
                let res = await Axios.get(`${SWAGGER_URL}/contents/${id}`, options);
                dispatch({
                    type: CONTENT_BLOG_BY_ID,
                    payload: res.data.data,
                });
            }
        } catch {
            dispatch({
                type: CONTENT_FAILED,
            });
        }
    };
};
