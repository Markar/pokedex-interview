import React from "react";

const Pokedex = () => {
  const imgUrl =
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png";

  //   const dataUrl = "https://pokeapi.co/api/v2/pokemon-form/1";

  return (
    <div>
      <img
        src={imgUrl}
        style={{ width: "50px", height: "50px" }}
        alt="pokemon"
      />
    </div>
  );
};

export default Pokedex;
