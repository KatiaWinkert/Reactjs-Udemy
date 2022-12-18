import { createContext, useReducer } from 'react'

export const TitleColorContext = createContext()

export const titleColorReduce = (state, action) => {
        // switch 

}


export const TitleColorContextProvider = ({ children }) => {
 
 const [state, dispath] = useReducer(titleColorReduce, { color: 'purple'})
 
    console.log('Title color context: ', state)
    return
 <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>
}
