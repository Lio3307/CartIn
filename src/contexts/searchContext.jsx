import { useState, createContext, useContext } from "react";
import { useProductContext } from "./contextData";

const SeacrhBarContext = createContext()

export function SearchBarProvider({ children }) {
    const [inputVal, setInputVal] = useState('')
    const { productData } = useProductContext()
    const [filteredItems, setFilteredItems] = useState()
    console.log(filteredItems)


    const handleInput = (e) => {
        e.preventDefault()

        if (!inputVal) return;
        const result = productData.filter((itemsVal) => itemsVal.title.toLowerCase().includes(inputVal.toLowerCase()))
        setFilteredItems(result)
    }

    const value = {
        inputVal,
        setInputVal,
        filteredItems,
        handleInput
    }

    return (
        <SeacrhBarContext.Provider value={value}>
            {children}
        </SeacrhBarContext.Provider>
    )
}

export const useSearchBarContext = () => useContext(SeacrhBarContext)