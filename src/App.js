import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommonFirebaseProvider from './context/CommonFirebaseProvider';
import Services from './components/Services/Services';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import ServicesDetails from './Pages/ServicesDetails';
import Footer from './components/Header/Footer';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Signin/Signin';
import PrivateRoute from './components/private/PrivateRoute';
import OrderReview from './Pages/OrderReview';
import NotFound from './components/NotFound/NotFound';
import CheckOut from './Pages/CheckOut';
function App() {
  return (
    <div className="App">

      <CommonFirebaseProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route path="/services">
              <Services />
            </Route>

            <Route path="/shop">
              <Shop />
            </Route>

            <PrivateRoute path="/checkout">
              <CheckOut />
            </PrivateRoute>

            <Route path="/orderReview">
              <OrderReview />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/product_details/:pdId">
              <ProductDetails />
            </PrivateRoute>

            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServicesDetails />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CommonFirebaseProvider>

    </div>
  );
}

export default App;
