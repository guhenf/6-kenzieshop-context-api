import { useContext } from "react"

import StyledUl from "./style"
import { CatalogueContext } from "../../providers/catalogue"
import CarCard from "../CarCard"

const CarsList = () => {
  const { catalogue } = useContext(CatalogueContext)
  console.log(catalogue)
  return (
    <StyledUl>
      {catalogue.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </StyledUl>
  )
}

export default CarsList
