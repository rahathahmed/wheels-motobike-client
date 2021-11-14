import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import About from './Pages/About/About';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider'
import Addproducts from "./Pages/Add Products/Addproducts";
import Purchase from "./Pages/Purchase/Purchase";
import Myorder from "./Pages/Myorder/Myorder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Makeadmin from "./Pages/Makeadmin/Makeadmin";
import Review from "./Pages/Review/Review";


function App() {
  return (
    <div>
      <AuthProvider>
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
            <Route exact path="/review">
              <Review></Review>
            </Route>
            <Route exact path="/myorder">
              <Myorder></Myorder>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/makeadmin">
              <Makeadmin></Makeadmin>
            </Route>
            <PrivateRoute exact path="/purchase/:productid">
              <Purchase></Purchase>
            </PrivateRoute>

            <Route exact path="/addproducts">
              <Addproducts></Addproducts>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
