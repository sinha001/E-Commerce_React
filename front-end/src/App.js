import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateComponent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element = {<PrivateRoute/>} >
          <Route path = "/" element = {<h1>E-Dashboard</h1>} />
          <Route path = "/add" element = {<h1>Add Product Components</h1>} />
          <Route path = "/update" element = {<h1>Update Product Components</h1>} />
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
