import { MODE } from "./ActionsTypes";
import { initialState } from "./InitialState";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MODE:
            const saved = !state.mode
            localStorage.setItem("mode", JSON.stringify(saved))
            return {
                ...state, mode: saved
            }
        default:
            return state
    }
}