import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"

import StyledHeader from "./style"
import japanImg from "../../assets/bandeira-japao.webp"
import Button from "../Button"
import { CartContext } from "../../providers/cart"
import { useContext } from "react"

const Header = () => {
  const location = useLocation("/home")
  const history = useHistory()

  const { cart } = useContext(CartContext)

  return (
    <StyledHeader>
      <div>
        <h1>JDM Shop</h1>
        <img src={japanImg} alt="Bandeira do Japão"></img>
      </div>

      {location.pathname === "/cart" ? (
        <Button
          onClick={() => {
            history.push("/home")
          }}
        >
          Home
        </Button>
      ) : (
        <Button onClick={() => history.push("/cart")}>
          Carrinho<span>{cart.length}</span>
        </Button>
      )}
    </StyledHeader>
  )
}

export default Header
