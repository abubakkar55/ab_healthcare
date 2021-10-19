import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommonFirebaseProvider from './context/CommonFirebaseProvider';
import Services from './components/Services/Services';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import ServicesDetails from './Pages/ServicesDetails';
import NotFound from './Pages/NotFound';
import Footer from './components/Header/Footer';
import Header from './components/Header/Header';
import Doctors from './Pages/Doctors';
import Signup from './components/Signup/Signup';
import Login from './components/Signin/Signin';
import PrivateRoute from './components/private/PrivateRoute';
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

            <Route path="/doctors">
              <Doctors />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/productDetails/:pdId">
              <ProductDetails />
            </Route>

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
