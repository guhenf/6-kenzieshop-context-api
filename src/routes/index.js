import { Route, Switch } from "react-router-dom"
import Cart from "../pages/cart"
import Home from "../pages/home"

function Routes() {
  return (
    <Switch>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact patch="/home">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
