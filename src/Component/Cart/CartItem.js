import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <Card sx={{ display: "flex", marginBottom: 2, alignItems: "flex-start" }}>
      <CardMedia
        component="img"
        sx={{ width: "20%" }} // Width as a percentage
        image={item.image}
        alt={item.label}
      />

      <CardContent
        sx={{
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "left", // Align text to the left
          alignItems: "flex-start", // Align items to the left
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography component="div" variant="h6">
            {item.label}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Description: {item.description}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
            Price: ${item.amount}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 3 }}>
            <IconButton
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="decrease quantity"
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label="increase quantity"
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Button onClick={() => onRemove(item.id)} color="warning">
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;
