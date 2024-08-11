// src/components/Cart.js
import React, { useState } from "react";
import CartItem from "./CartItem";
import EmptyCartIcon from "../../Assets/Empty Cart.gif";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
} from "@mui/material";

import { DataContext } from "../../DataProvider";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { data, updateData } = React.useContext(DataContext);

  React.useEffect(() => {
    setCartItems(data);
  }, []);

  const handleRemove = (id) => {
    let newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
    updateData(newItems);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0 && quantity < 10) {
      let newItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      );
      setCartItems(newItems);
      updateData(newItems);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseInt(item.amount) * item.quantity,
      0
    );
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" color="#15333D" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: "center", marginTop: 5, marginBottom: 15 }}>
          <IconButton aria-label="add to cart">
            <img src={EmptyCartIcon} alt="Empty Cart" />
          </IconButton>
          <Typography variant="h6" color="#15333D" gutterBottom>
            Your cart is empty
          </Typography>
          <Button variant="contained" color="primary" href="/products">
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          <Paper
            elevation={3}
            sx={{ padding: 2, marginTop: 2, textAlign: "right" }}
          >
            <Typography variant="h5">Total: ${getTotalPrice()}</Typography>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default Cart;
