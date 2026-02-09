const savedMode = localStorage.getItem("mode")


export const initialState = {
    mode: savedMode !== null ? JSON.parse(savedMode) : false,
    isOpen: false
}