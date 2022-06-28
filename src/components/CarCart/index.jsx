import { useContext } from "react"

import StyledUl from "./style"
import { CartContext } from "../../providers/cart"
import CarCard from "../CarCard"

const CarsList = () => {
  const { cart } = useContext(CartContext)

  return (
    <StyledUl>
      {cart.map((car, index) => (
        <CarCard key={index} car={car} isRemovable />
      ))}
    </StyledUl>
  )
}

export default CarsList
