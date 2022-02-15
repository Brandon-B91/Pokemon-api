const api = "https://pokeapi.co/api/v2/pokemon";
const apiMoves = "https://pokeapi.co/api/v2/move";
const apiSpecies = "https://pokeapi.co/api/v2/pokemon-species";
const apiTypes = "https://pokeapi.co/api/v2/type"

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value);
    searchBox.value = "";
  }
}

function getResults(pokemon) {
  const pokemonData = fetch(`${api}/${pokemon}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      displayPokemonName(data);
      const moveName = data.moves[0].move.name;
      return fetch(`${apiMoves}/${moveName}`);
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayMove1(data);
      console.log(data);
      return fetch(`${apiSpecies}/${pokemon}`);
    })
    .then((data) => data.json())
    .then((data) => {
        displaySpecies(data)
      console.log(data);
    })

  const pokemonData2 = fetch(`${api}/${pokemon}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      displayPokemonName(data);
      const moveName = data.moves[1].move.name;
      return fetch(`${apiMoves}/${moveName}`);
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayMove2(data);
      console.log(data);
    });

    const pokemonData3 = fetch(`${api}/${pokemon}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      displayPokemonName(data);
      return fetch(`${apiTypes}/${data.types[0].type.name}`);
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayWeakness(data);
      console.log(data);
    });

}

function displayPokemonName(pokemon) {
    let card = document.querySelector('.card')
  let name = document.querySelector("h2");
  name.innerText = pokemon.name;
  let hp1 = document.querySelector(".hp1");
  hp1.innerText = pokemon.stats[0].base_stat;
  let typeImg = document.querySelector('.type-img')
  let mainImg = document.querySelector('.mainImg')
  mainImg.src = pokemon.sprites.other["official-artwork"].front_default
  let no = document.querySelector('.no')
  no.innerText = `NO: ${pokemon.id}`
  let ht = document.querySelector('.ht')
  ht.innerText = `HT: ${Math.round(pokemon.height / 3.048)} ft`
  let wt = document.querySelector('.wt')
  wt.innerText = `WT: ${Math.round(pokemon.weight / 4.536)} lbs`

  if(pokemon.types[0].type.name === "bug") {
      card.style.background = "linear-gradient(to bottom right, lightgreen, green)";
      typeImg.src = "types/bug.svg"
  }
  if(pokemon.types[0].type.name === "dark") {
      card.style.background = "linear-gradient(to bottom right, gray, #333)";
      typeImg.src = "types/dark.svg"
  }
  if(pokemon.types[0].type.name === "dragon") {
      card.style.background = "linear-gradient(to bottom right, #C4A484, brown)";
      typeImg.src = "types/dragon.svg"
  }
  if(pokemon.types[0].type.name === "electric") {
      card.style.background = "linear-gradient(to bottom right, lightyellow, yellow)";
      typeImg.src = "types/electric.svg"
  }
  if(pokemon.types[0].type.name === "fairy") {
      card.style.background = "linear-gradient(to bottom right, pink, salmon)";
      typeImg.src = "types/fairy.svg"
  }
  if(pokemon.types[0].type.name === "fire") {
      card.style.background = "linear-gradient(to bottom right, orange, red)";
      typeImg.src = "types/fire.svg"
  }
  if(pokemon.types[0].type.name === "flying") {
      card.style.background = "linear-gradient(to bottom right, white, lightgray)";
      typeImg.src = "types/flying.svg"
  }
  if(pokemon.types[0].type.name === "ghost") {
      card.style.background = "linear-gradient(to bottom right, purple, black)";
      typeImg.src = "types/ghost.svg"
  }
  if(pokemon.types[0].type.name === "grass") {
      card.style.background = "linear-gradient(to bottom right, lightgreen, green)";
      typeImg.src = "types/grass.svg"
  }
  if(pokemon.types[0].type.name === "ground") {
      card.style.background = "linear-gradient(to bottom right, #C4A484, brown)";
      typeImg.src = "types/ground.svg"
  }
  if(pokemon.types[0].type.name === "ice") {
      card.style.background = "linear-gradient(to bottom right, white, lightblue)";
      typeImg.src = "types/ice.svg"
  }
  if(pokemon.types[0].type.name === "normal") {
      card.style.background = "linear-gradient(to bottom right, white, lightgray)";
      typeImg.src = "types/normal.svg"
  }
  if(pokemon.types[0].type.name === "poison") {
      card.style.background = "linear-gradient(to bottom right, green, purple)";
      typeImg.src = "types/poison.svg"
  }
  if(pokemon.types[0].type.name === "psychic") {
      card.style.background = "linear-gradient(to bottom right, pink, purple)";
      typeImg.src = "types/psychic.svg"
  }
  if(pokemon.types[0].type.name === "rock") {
      card.style.background = "linear-gradient(to bottom right, #C4A484, brown)";
      typeImg.src = "types/rock.svg"
  }
  if(pokemon.types[0].type.name === "steel") {
      card.style.background = "linear-gradient(to bottom right, lightgray, silver)";
      typeImg.src = "types/steel.svg"
  }
  if(pokemon.types[0].type.name === "water") {
      card.style.background = "linear-gradient(to bottom right, lightblue, blue)";
      typeImg.src = "types/water.svg"
  }
}

function displayMove1(move) {
  let moveType = document.querySelector(".move-type-img");
  moveType.innerText = move.type.name;
  let move1 = document.querySelector(".move-name-1");
  move1.innerText = move.name;
  let dmg1 = document.querySelector(".move-dmg-1");
  dmg1.innerText = move.power;

 if(move.type.name === "bug") {
    moveType.src = "types/bug.svg"
 }
 if(move.type.name === "dark") {
    moveType.src = "types/dark.svg"
 }
 if(move.type.name === "dragon") {
    moveType.src = "types/dragon.svg"
 }
 if(move.type.name === "electric") {
    moveType.src = "types/electric.svg"
 }
 if(move.type.name === "fairy") {
    moveType.src = "types/fairy.svg"
 }
 if(move.type.name === "fighting") {
    moveType.src = "types/fighting.svg"
 }
 if(move.type.name === "fire") {
    moveType.src = "types/fire.svg"
 }
 if(move.type.name === "flying") {
    moveType.src = "types/flying.svg"
 }
 if(move.type.name === "ghost") {
    moveType.src = "types/ghost.svg"
 }
 if(move.type.name === "grass") {
    moveType.src = "types/grass.svg"
 }
 if(move.type.name === "ground") {
    moveType.src = "types/ground.svg"
 }
 if(move.type.name === "ice") {
    moveType.src = "types/ice.svg"
 }
 if(move.type.name === "normal") {
    moveType.src = "types/normal.svg"
 }
 if(move.type.name === "poison") {
    moveType.src = "types/poison.svg"
 }
 if(move.type.name === "psychic") {
    moveType.src = "types/psychic.svg"
 }
 if(move.type.name === "rock") {
    moveType.src = "types/rock.svg"
 }
 if(move.type.name === "steel") {
    moveType.src = "types/steel.svg"
 }
 if(move.type.name === "water") {
    moveType.src = "types/water.svg"
 }
}

function displayMove2(move) {
  let moveType = document.querySelector(".move-type-img-2");
  moveType.innerText = move.type.name;
  let move1 = document.querySelector(".move-name-2");
  move1.innerText = move.name;
  let dmg1 = document.querySelector(".move-dmg-2");
  dmg1.innerText = move.power;
  console.log(dmg1.value)

  if(move.type.name === "bug") {
    moveType.src = "types/bug.svg"
 }
 if(move.type.name === "dark") {
    moveType.src = "types/dark.svg"
 }
 if(move.type.name === "dragon") {
    moveType.src = "types/dragon.svg"
 }
 if(move.type.name === "electric") {
    moveType.src = "types/electric.svg"
 }
 if(move.type.name === "fairy") {
    moveType.src = "types/fairy.svg"
 }
 if(move.type.name === "fighting") {
    moveType.src = "types/fighting.svg"
 }
 if(move.type.name === "fire") {
    moveType.src = "types/fire.svg"
 }
 if(move.type.name === "flying") {
    moveType.src = "types/flying.svg"
 }
 if(move.type.name === "ghost") {
    moveType.src = "types/ghost.svg"
 }
 if(move.type.name === "grass") {
    moveType.src = "types/grass.svg"
 }
 if(move.type.name === "ground") {
    moveType.src = "types/ground.svg"
 }
 if(move.type.name === "ice") {
    moveType.src = "types/ice.svg"
 }
 if(move.type.name === "normal") {
    moveType.src = "types/normal.svg"
 }
 if(move.type.name === "poison") {
    moveType.src = "types/poison.svg"
 }
 if(move.type.name === "psychic") {
    moveType.src = "types/psychic.svg"
 }
 if(move.type.name === "rock") {
    moveType.src = "types/rock.svg"
 }
 if(move.type.name === "steel") {
    moveType.src = "types/steel.svg"
 }
 if(move.type.name === "water") {
    moveType.src = "types/water.svg"
 }
}

function displayWeakness(pokemon) {
    let weakness = document.querySelector('.weakness-img')
    // weakness.innerText = `Weakness: ${pokemon.damage_relations.double_damage_from[0].name}`
    let resist = document.querySelector('.resistance-img')
    // resist.innerText = `Resistance ${pokemon.damage_relations.half_damage_from[0].name}`

    if(pokemon.damage_relations.double_damage_from[0].name === "bug") {
        weakness.src = "types/bug.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "dark") {
        weakness.src = "types/dark.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "dragon") {
        weakness.src = "types/dragon.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "electric") {
        weakness.src = "types/electric.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "fairy") {
        weakness.src = "types/fairy.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "fighting") {
        weakness.src = "types/fighting.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "fire") {
        weakness.src = "types/fire.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "flying") {
        weakness.src = "types/flying.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "ghost") {
        weakness.src = "types/ghost.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "grass") {
        weakness.src = "types/grass.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "ground") {
        weakness.src = "types/ground.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "ice") {
        weakness.src = "types/ice.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "normal") {
        weakness.src = "types/normal.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "poison") {
        weakness.src = "types/poison.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "psychic") {
        weakness.src = "types/psychic.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "rock") {
        weakness.src = "types/rock.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "steel") {
        weakness.src = "types/steel.svg"
    }
    if(pokemon.damage_relations.double_damage_from[0].name === "water") {
        weakness.src = "types/water.svg"
    }

    if(pokemon.damage_relations.half_damage_from[0].name === "bug") {
        resist.src = "types/bug.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "dark") {
        resist.src = "types/dark.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "dragon") {
        resist.src = "types/dragon.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "electric") {
        resist.src = "types/electric.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "fairy") {
        resist.src = "types/fairy.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "fighting") {
        resist.src = "types/fighting.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "fire") {
        resist.src = "types/fire.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "flying") {
        resist.src = "types/flying.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "ghost") {
        resist.src = "types/ghost.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "grass") {
        resist.src = "types/grass.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "ground") {
        resist.src = "types/ground.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "ice") {
        resist.src = "types/ice.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "normal") {
        resist.src = "types/normal.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "poison") {
        resist.src = "types/poison.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "psychic") {
        resist.src = "types/psychic.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "rock") {
        resist.src = "types/rock.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "steel") {
        resist.src = "types/steel.svg"
    }
    if(pokemon.damage_relations.half_damage_from[0].name === "water") {
        resist.src = "types/water.svg"
    }
 
}

function displaySpecies(species) {
    let dexEntry = document.querySelector('.cite')
    dexEntry.innerHTML = species.flavor_text_entries[0].flavor_text
}


