// import { isopen } from "./Actions";
import { ISOPEN, MODE } from "./ActionsTypes";
import { initialState } from "./InitialState";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MODE:
            const saved = !state.mode
            localStorage.setItem("mode", JSON.stringify(saved))
            return {
                ...state, mode: saved
            }

        case ISOPEN:
            return { ...state, isOpen: !state.isOpen }
        default:
            return state
    }
}