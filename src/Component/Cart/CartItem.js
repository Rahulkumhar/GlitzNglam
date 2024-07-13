// src/components/CartItem.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.image}
        alt={item.label}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          {item.label}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Price: {item.amount}
        </Typography>
        <TextField
          label="Quantity"
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
          sx={{ width: "80px", marginTop: 2 }}
        />
        <IconButton
          onClick={() => onRemove(item.id)}
          color="secondary"
          aria-label="remove from cart"
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartItem;
