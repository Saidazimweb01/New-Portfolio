import { MODE } from "./ActionsTypes"

const saveMode = localStorage.getItem("mode" || "")

export const mode = () => {
    return { type: MODE }
}


