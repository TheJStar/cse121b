/* W06: Programming Tasks */

/* Declare and initialize global variables */
const pokiElement = document.getElementById("pokigrid");
let pokemonList = {};
let pokemonNameList = [];
const totalPokemonAmount = 1302;
let pokemonToShow = 1302;
let inputField = document.querySelector("#searchbar");
let searchButton = document.querySelector("#searchbutton");
let enterKey = 13;
const fetchControler = new AbortController();

const displayPokemons = (pokemon) => {
        let artical = document.createElement("artical");
        let name = document.createElement("h2");
        let type = document.createElement("h3");
        let height = document.createElement("h4");
        let weight = document.createElement("h4");
        let base_hp = document.createElement("h5");
        let base_at = document.createElement("h5");
        let base_df = document.createElement("h5");
        let base_sat = document.createElement("h5");
        let base_sdf = document.createElement("h5");
        let base_sp = document.createElement("h5");
        let img = document.createElement("img");

        name.textContent = pokemon.name.replace(/\b\w/g, c=> c.toUpperCase()); // title case 
        type.textContent = pokemon.types[0].type.name.replace(/\b\w/g, c=> c.toUpperCase());
        height.textContent = `Height: ${pokemon.height} ft`;
        weight.textContent = `Weight: ${pokemon.weight} lb`;
        base_hp.textContent = `Base HP: ${pokemon.stats[0].base_stat}`;
        base_at.textContent = `Base Attack: ${pokemon.stats[1].base_stat}`;
        base_df.textContent = `Base Defence: ${pokemon.stats[2].base_statt}`;
        base_sat.textContent = `Base Special-Attack: ${pokemon.stats[3].base_stat}`;
        base_sdf.textContent = `Base Special-Deffence: ${pokemon.stats[4].base_stat}`;
        base_sp.textContent = `Base Speed: ${pokemon.stats[5].base_stat}`;
        
        if (pokemon.sprites.front_default == null) {
            img.setAttribute("src", "images/image_missing.png");
        }else{
            img.setAttribute("src", pokemon.sprites.front_default);
        }
        img.setAttribute("alt", pokemon.name);

        // imageContainer.appendChild(img);
        artical.appendChild(img);
        artical.appendChild(name);
        artical.appendChild(type);
        artical.appendChild(height);
        artical.appendChild(weight);
        artical.appendChild(base_hp);
        artical.appendChild(base_at);
        artical.appendChild(base_df);
        artical.appendChild(base_sat);
        artical.appendChild(base_sdf);
        artical.appendChild(base_sp);
        pokiElement.appendChild(artical);
};


/* async getPokemons Function using fetch()*/
const getSinglePokemon = async(id) => {
    let notfound = document.createElement("h1");
    // a specified pokemon by id
    if (pokemonNameList.includes(id)){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response.ok){
            pokemonList = await response.json();
        }
        reset();
        notfound.textContent = "";
        displayPokemons(pokemonList);
    }
    else {
        reset();
        notfound.textContent = "No Such Pokemon";
        pokiElement.appendChild(notfound);
    }
}

const getPokemons = async() => {
    // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302 // all pokemon there is a total of 1302 pokemon
    const { signal } = fetchControler;

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302");
    if (response.ok){
        reset()
        pokemonList = await response.json();
        searchButton.setAttribute("disabled", "disabled");
        searchButton.textContent = "Loading Pokemon Data";
        for (let i = 0; i < pokemonToShow; i++) {
            response = await fetch(pokemonList.results[i].url, { signal });
            pokemonNameList.push(pokemonList.results[i].name);
            if (response.ok){
                newpokemon = await response.json();
            }
            displayPokemons(newpokemon);
        }
        searchButton.removeAttribute("disabled");
        searchButton.textContent = "Get all Pokemon";
    }
}

/* reset Function */
const reset = () => {
    pokiElement.innerHTML = "";
}
const clearInputField = () => {
    inputField.value = "";
}

getPokemons();


/* Event Listener */
searchButton.addEventListener("click", async()=>{
    if (!inputField.value.trim()) { // empty field
        clearInputField();
        reset();
        getPokemons();
        return;
    }
    else {
        reset();
        getSinglePokemon(inputField.value.trim().toLowerCase())
    }
});
inputField.addEventListener("keyup", async()=>{
    if (!inputField.value.trim()) { // empty field
        searchButton.textContent = "Get all Pokemon";
    }
    else {
        searchButton.textContent = "Search";
    }
});