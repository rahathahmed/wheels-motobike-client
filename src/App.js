import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import About from './Pages/About/About';
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';



function App() {
  return (
    <div className="App">
        <BrowserRouter> 
        <Header></Header>
          <Switch>
              <Route exact path="/">
                    <Home></Home>
              </Route>
              <Route exact path="/home">
                    <Home></Home>
              </Route>
              <Route exact path="/login">
                    <Login></Login>
              </Route>
              <Route exact path="/register">
                    <Register></Register>
              </Route>
              <Route exact path="/about">
                    <About></About>
              </Route>
              <Route exact path="/products">
                    <Products></Products>
              </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
