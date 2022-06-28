import { CartProvider } from "./providers/cart"
import { CatalogueProvider } from "./providers/catalogue"
import Routes from "./routes"
import Container from "./style"

function App() {
  return (
    <CatalogueProvider>
      <CartProvider>
        <Container>
          <Routes />
        </Container>
      </CartProvider>
    </CatalogueProvider>
  )
}

export default App
