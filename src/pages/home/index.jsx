import ProductList from "../../components/CarList"
import StyledSection from "./style"
import Header from "../../components/Header"

function Home() {
  return (
    <StyledSection>
      <Header />
      <h2>Carros disponíveis</h2>
      <ProductList />
    </StyledSection>
  )
}

export default Home
