import { createContext, useState } from "react"
import carsList from "../data/data"

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState(carsList)

  console.log(catalogue)

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  )
}
