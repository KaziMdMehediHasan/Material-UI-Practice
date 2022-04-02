import { Button, Typography } from "@mui/material";
import React from "react";

const Favourites = ({ fav, deleteFromFav }) => {
  return (
    <div>
      {fav.map((f, index) => (
        <>
          <Typography variant="h3" component="h4">
            {f.strMeal}
          </Typography>
          <Button onClick={() => deleteFromFav(index)}>Delete</Button>
        </>
      ))}
    </div>
  );
};

export default Favourites;
