import {
    profile_start,
    profile_success,
    profile_address_id,
    profile_failed,
} from '../Types';

const INITIAL_STATE = {
    addressList: [],
    addressById: [],
    loading: false,
};

export const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case profile_start:
            return {
                ...state,
                loading: true,
            };
        case profile_success:
            return {
                ...state,
                addressList: action.payload,
                loading: false,
            };
        case profile_address_id:
            return {
                ...state,
                addressById: action.payload,
                loading: false,
            };
        case profile_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
