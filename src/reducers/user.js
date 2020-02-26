import { SAVE_USER,DELETE_USER} from "../constants/constant";

const initialState = {
    userData: null
}
const rootReducer = (state = initialState, action) => {
    let updateSate = Object.assign({}, state);
    switch (action.type) {
        case SAVE_USER:
            updateSate.userData = action.user;
            return updateSate;
        case DELETE_USER:
            updateSate.userData = null;
            return updateSate;
        default:
            return updateSate;
    }
}
export default rootReducer;