import { actionTypes } from "./actionTypes";

export const initialState = {
    firstName: '',
    email: '',
    education: '',
    feedback: '',
    checkbox: false,
    lastName: '',
    gender: '',
    pcNumber: 0
}
export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case actionTypes.TOGGLE:
            return {
                ...state,
                checkbox: !state.checkbox
            };
        default:
            return state

    }

}