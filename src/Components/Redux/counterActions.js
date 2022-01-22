import { DECREAMENT, INCREAMENT } from "./types"

export const increamentAction = () => {
    return {
        type : INCREAMENT
    }
}

export const decreamentAction = () => {
    return {
        type : DECREAMENT
    }
}