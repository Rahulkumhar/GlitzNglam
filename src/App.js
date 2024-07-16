import "./App.css";
import { Button, Container } from "@mui/material";
import Header from "./Component/Header";
import ProductsList from "./Component/Productslist";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
