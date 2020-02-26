import { SAVE_USER,DELETE_USER} from "../constants/constant";

export const saveUserData = (user) => {
    return {
        type: SAVE_USER,
        user
    }
}

export const logoutUser = (user) => {
    return {
        type: DELETE_USER,
        user
    }
}