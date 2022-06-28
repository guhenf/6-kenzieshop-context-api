import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (car) => {
    setCart([...cart, car])
  }

  const removeFromCart = (car) => {
    const newCart = cart.filter(
      (carOnCatalogue) => carOnCatalogue.model !== car.model
    )
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
