import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ApplicationContextProvider from "./Hooks/ApplicationContext";
import CartContextProvider from "./Hooks/CartContext";
import ProductsContextProvider from "./Hooks/Products";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Landing from "./Pages/Landing/Landing";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import RegisterAndLogin from "./Pages/RegisterAndLogin/RegisterAndLogin";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Shop from "./Pages/Shop/Shop";

function App(): JSX.Element {
  return (
    <ProductsContextProvider>
      <div className="App">
        <CartContextProvider>
          <ApplicationContextProvider>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={RegisterAndLogin} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/payment" component={PaymentPage} />
              <Route
                exact
                path="/shop/:categoryId"
                children={<CategoryPage />}
              />
              <Route
                exact
                path="/shop/search/:name"
                children={<SearchPage />}
              />
              <Redirect to="/" />
            </Switch>
          </ApplicationContextProvider>
        </CartContextProvider>
      </div>
    </ProductsContextProvider>
  );
}

export default App;
