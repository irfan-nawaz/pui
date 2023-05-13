import { createContext, useContext } from 'react'

import {useReducer}

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  return <FilterProductsContext.Provider></FilterProductsContext.Provider>
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }