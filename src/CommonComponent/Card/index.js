import React, { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Necklace from "../../Assests/necklace.jpg";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataProvider";

const CardComponent = ({ item }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { data, updateData } = useContext(DataContext);

  useEffect(() => {
    if (Array.isArray(data)) setItems(data);
  }, [data]);
  const checkIsAlreadyInCart = () => {
    return items.find(({ id }) => item?.id === id);
  };
  const addToCart = () => {
    let newItems = [];
    if (checkIsAlreadyInCart(item)) {
      newItems = items.filter(({ id }) => item?.id !== id);
    } else {
      newItems = [...items, item];
    }
    console.log("newItems", newItems);
    setItems(newItems);
    // Store the updated array in localStorage
    updateData(newItems);
    // localStorage.setItem("cartProducts", JSON.stringify(newItems));
    // navigate("/cart");
  };
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item?.label}
      />
      <CardMedia
        component="img"
        height="194"
        image={item?.image !== "" ? item?.image : Necklace}
        alt={item?.label}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="success"
          onClick={() => addToCart(item)}
        >
          <IconButton aria-label="add to cart">
            <ShoppingCartIcon color="light" />
          </IconButton>{" "}
          {checkIsAlreadyInCart() ? "Remove from cart" : "Add to cart"}
        </Button>
        <IconButton aria-label="add to favorites">
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
