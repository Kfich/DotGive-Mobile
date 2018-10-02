import {SET_CURRENT_USER} from '../../actions';


const INITIAL_STATE = {currentUser: null};

export const user_reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CURRENT_USER_LOADED': {
            return { ...state, currentUser: action.currentUser? action.currentUser : {} };
        }
        default:
            return state;
    }
};



export default user_reducer;
