const express = require("express");
const { pokemonRouter } = require('./routes/pokemonRoutes')
const app = express();
const port = 3000;

// const db = require("./pokedex.json");

// const poke = require("./routes/pokemons");

app.use("/", pokemonRouter);



// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use("/pokemons", poke);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});





