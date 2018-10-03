const pfx = 'app/user-actions/';

/* ========= Actions ========= */

export const SOME_ACTION = pfx + 'SOME_ACTION';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_USER_SUCCEEDED = 'SET_USER_SUCCEEDED';
export const SET_USER_FAILED = 'SET_USER_FAILED';


/* ========= Action Creators ========= */

/**
 * Set current user object on login
 * Typical use case: user login.
 */

 export const setCurrentUser = (args) => ({
     type: SET_CURRENT_USER,
     payload: args
 })

export default {
    SET_CURRENT_USER,

    setCurrentUser,
}
