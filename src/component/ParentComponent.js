import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import Favourites from "./Favourites";
import axios from "axios";
import SingleMeal from "./SingleMeal";

const ParentComponent = () => {
  const [meals, setMeals] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [search, setSearch] = useState("Arrabiata");
  const [fav, setFav] = useState([]);

  // capture the data that is typed inside the textfield
  const handleBlur = (e) => {
    setKeyWord(e.target.value);
  };

  // set the search keyWord with a button click
  const handleClick = () => {
    setSearch(keyWord);
  };

  // add to favourite function

  const addToFav = (meal) => {
    let newFav = [...fav, meal];
    setFav(newFav);
  };

  // delete from the favorite list
  const deleteFromFav = (index) => {
    let updatedFav = fav.filter((fav, i) => i !== index);
    setFav(updatedFav);
  };

  console.log(fav);
  // fetch the meal data from the api
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        console.log(response.data);
        setMeals(response.data.meals);
      })
      .catch((err) => console.log(err));
  }, [search]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* textfield and button area */}
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            fullWidth
            onBlur={handleBlur}
          />
          <Box>
            <Button onClick={handleClick} variant="contained" color="success">
              Search
            </Button>
          </Box>
          {/* single meal will be rendered here */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {meals.map((meal, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <SingleMeal
                    meal={meal}
                    fav={fav}
                    setFav={setFav}
                    key={index}
                    index={index}
                    addToFav={addToFav}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Favourites fav={fav} deleteFromFav={deleteFromFav} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ParentComponent;
