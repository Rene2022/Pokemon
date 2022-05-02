const express = require("express");
const pokemonRouter = express.Router();
const { getAllPokemons, getOnePokemon } = require("../controllers/pokemonController");

pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/:id", getOnePokemon);



module.exports = {
    pokemonRouter
} 




// const api = express.Router();

// api.route("/").get(getAllPokemons)

// api.route("/:id").get(getOnePokemon)

// module.exports = api;
