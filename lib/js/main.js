let randNum = Math.floor(Math.random()*807);
let url = `https://pokeapi.co/api/v2/pokemon?limit=${randNum}`;
let pokeBall = document.getElementById("poke_ball");

fetch(url)
.then((resp) => resp.json())
.then(function(data){

    let mons = data.results;
    console.log(mons);

});