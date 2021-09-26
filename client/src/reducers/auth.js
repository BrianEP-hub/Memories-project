import { AUTH, LOGOUT } from '../constants/actionTypes';


const authReducer = (state = { authData: null }, action) =>{
    switch(action.type){
        case AUTH: 
            localStorage.setItem('profile', JSON.stringify({}))
            return state;
        default:
            return state;
    }

}

export default authReducer;