import { createContext } from "react"

export const createCustomContext = (initialValue: any) => {
    return createContext(initialValue)
}