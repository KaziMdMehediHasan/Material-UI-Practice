import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const SingleMeal = ({ meal, index, fav, setFav, addToFav }) => {
  const { strInstructions, strMeal, category, strTags, strMealThumb } = meal;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {category}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={strMeal}
        subheader={strTags}
      />
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {strInstructions.slice(0, 50)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => addToFav(meal)}>Add To Favorite</Button>
      </CardActions>
    </Card>
  );
};

export default SingleMeal;
