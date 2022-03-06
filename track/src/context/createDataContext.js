import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext()
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)
        const BoundActions = {}
        for (let key in actions) {
            BoundActions[key] = actions[key](dispatch)
        }
        return (
            <Context.Provider value={{ state, ...BoundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return { Provider,Context }
}