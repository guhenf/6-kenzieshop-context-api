import { useContext } from "react"
import CarsCart from "../../components/CarCart"
import { CartContext } from "../../providers/cart"
import StyledSection from "./style"
import Header from "../../components/Header"

function Cart() {
  const { cart } = useContext(CartContext)

  const totalValue = cart.reduce((acc, cur) => acc + cur.price, 0)

  return (
    <>
      <Header />
      <StyledSection>
        {cart.length ? (
          <>
            <h2>Carrinho</h2>
            <span className="styled">
              Valor da garagem:{" "}
              {totalValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </span>
            <CarsCart />
          </>
        ) : (
          <h2>Garagem Vazia</h2>
        )}
      </StyledSection>
    </>
  )
}

export default Cart
