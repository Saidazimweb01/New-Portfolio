import { ISOPEN, MODE } from "./ActionsTypes"

// const saveMode = localStorage.getItem("mode" || "")

export const mode = () => {
    return { type: MODE }
}
export const isopen = () => {
    return { type: ISOPEN }
}


