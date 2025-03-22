async function fetchPokemon() {
  try {
    const pokemonSearchName = document
      .getElementById("pokemonSearchName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonSearchName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch the resource!");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const pokemonSpriteShiny = data.sprites.front_shiny;
    const pokemonDisplayName = data.name;
    const pokemonType = data.types;
    const pokemonAbility = data.abilities;

    // Display the name
    const displayName = document.getElementById("pokemonDisplayName");
    displayName.innerHTML =
      pokemonDisplayName.charAt(0).toUpperCase() + pokemonDisplayName.slice(1);

    // Display the normal sprite
    const imgElementNormal = document.getElementById("pokemonSpriteNormal");
    imgElementNormal.src = pokemonSprite;
    imgElementNormal.style.display = "inline-block";

    // Display the shiny sprite
    const imgElementShiny = document.getElementById("pokemonSpriteShiny");
    imgElementShiny.src = pokemonSpriteShiny;
    imgElementShiny.style.display = "inline-block";

    // Display the types
    const displayTypes = document.getElementById("pokemonDisplayType");
    const types = document.getElementById("pokemonType");
    types.innerHTML = pokemonType
      .map(
        (type) =>
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
      )
      .join(" / ");
    displayTypes.style.display = "";

    //Display the ability
    const displayAbilities = document.getElementById("pokemonDisplayAbilities");
    const abilities = document.getElementById("pokemonAbilities");
    abilities.innerHTML = pokemonAbility
      .map(
        (ability) =>
          ability.ability.name.charAt(0).toUpperCase() +
          ability.ability.name.slice(1)
      )
      .join(" / ");
    displayAbilities.style.display = "";
  } catch (error) {
    console.error(error);
  }
}
