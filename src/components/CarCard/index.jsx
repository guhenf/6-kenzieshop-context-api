import { useContext } from "react"
import { CartContext } from "../../providers/cart"
import StyledLi from "./style"

const CarCard = ({ car, isRemovable = false }) => {
  const { addToCart, removeFromCart } = useContext(CartContext)
  const { model, pattern, age, price, image } = car

  return (
    <StyledLi>
      <img src={image} alt="Imagem de carro" />
      <div>
        <h3>Modelo: {model}</h3>
        <p>Marca: {pattern}</p>
        <p>Ano: {age}</p>
        <span>
          Preço:{" "}
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
        </span>
      </div>

      {isRemovable ? (
        <button onClick={() => removeFromCart(car)}>Remover</button>
      ) : (
        <button onClick={() => addToCart(car)}>Adicionar</button>
      )}
    </StyledLi>
  )
}

export default CarCard
