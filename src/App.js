//import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "@mui/material";
import Header from "./Component/Header";
import ProductsList from "./Component/Productslist";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Cart from "./Component/Cart";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path='/contact' element={<Contact/>} /> */}
      </Routes>
      <Button variant="contained">Click Me</Button>
      <Footer />
    </div>
  );
};

export default App;
