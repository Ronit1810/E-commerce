import {createContext, useState} from "react"

export const Context = createContext();

const AppContext = ({ children }) => {
    const [Categories, setCategories] = useState()
    const [products, setproducts] = useState()
    return <Context.Provider value={{
        Categories,
        setCategories,
        products,
        setproducts
    }}>{ children }</Context.Provider>
}
export default AppContext;