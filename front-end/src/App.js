import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element = {<PrivateRoute/>} >
          <Route path = "/" element = {<Products/>} />
          <Route path = "/add" element = {<AddProduct/>} />
          <Route path = "/update/:id" element = {<UpdateProduct/>} />
          <Route path = "/logout" element = {<h1>Logout</h1>} />
          <Route path = "/profile" element = {<h1>Profile Components</h1>} />
          </Route>

          <Route path = "/signup" element = {<SignUp/>} />
          <Route path = '/login' element = {<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
