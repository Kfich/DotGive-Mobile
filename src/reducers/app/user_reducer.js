import { SET_CURRENT_USER } from '../../actions';


const INITIAL_STATE = {currentUser: null};

const testUser = () =>{
  console.log("This is the current user test");
}

export const user_reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            console.log("This is the current user action triggered!!", state);
            return { ...state, currentUser: action.currentUser? action.currentUser : {} };
        }
        default:
            return state;
    }
};

export default user_reducer;


// return { ...state, currentUser: action.currentUser? action.currentUser : "Hello! This is curren user" };
