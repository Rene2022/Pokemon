let jsonData = require("../records.json");

// const db = require("../Poke2/pokemons.json")

// console.log(jsonData)

// const getAllPokemon = (req, res) => {
//   res.send(jsonData);
// };
const getAllPokemons = async (req, res) => {
  try {
    res.json(jsonData);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getOnePokemon = (req, res) => {
  try {
    // const { id } = req.params;
    // // console.log("REQUEST", req.params)
    // // console.log(typeof id)
    // const pokemon = jsonData.find((pokemon) => { 
    //   id === pokemon.id})
    // res.send(pokemon)
    const { id } = req.params;
  const pokemon = jsonData.find((e) => {
    return id == e.id;
  });

  res.send(pokemon);



  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getOnePokemon,
  getAllPokemons,
};
