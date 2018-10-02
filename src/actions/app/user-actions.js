const pfx = 'app/user-actions/';

/* ========= Actions ========= */

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

/* ========= Action Creators ========= */

/**
 * Set current user object on login
 * Typical use case: user login.
 */

export function setCurrentUser() {
   return {
     type: SET_CURRENT_USER
   };
 }

export default {
    SET_CURRENT_USER,

    setCurrentUser,
}
