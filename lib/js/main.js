let randNum = Math.floor(Math.random()*807);
let url = `https://pokeapi.co/api/v2/pokemon?limit=${randNum}`;
let pokeBall = document.getElementById("poke_ball");
let catUrl = "https://api.thecatapi.com/v1/images/search"
fetch(url)
.then((resp) => resp.json())
.then(function(data){

    let mons = data.results;
    console.log(mons);

});

fetch(catUrl)
.then((resp) => resp.json())
.then(function(data){
    let cat = document.getElementById("cat")
    cat.setAttribute("src" , data[0].url)

});

let bg = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83w4vw-5904a28c-9b91-41c7-b352-8d684658ad1e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzdzR2dy01OTA0YTI4Yy05YjkxLTQxYzctYjM1Mi04ZDY4NDY1OGFkMWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.i8pttlTw2MJzP-tqYQdOLI1GyDbXhbR1LEzsYyz5ZwE","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d843okx-eb13e8e4-0fa4-4fa9-968a-e0f36ff168de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0M29reC1lYjEzZThlNC0wZmE0LTRmYTktOTY4YS1lMGYzNmZmMTY4ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TIK_E5L8dTyBUk_dADA5WkLP8jSJMR7YGJG54KNAido","http://i.imgur.com/VQZQbew.png","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83u6dm-ebaee268-2149-4d70-abad-2b9d19e4806d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzdTZkbS1lYmFlZTI2OC0yMTQ5LTRkNzAtYWJhZC0yYjlkMTllNDgwNmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LoKoO0_A1-_AMfaUb66yFQ43XCi4aEXpk1GIFgYFC5M","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d844jms-2a971546-7cd0-4333-bc67-58a812213bbd.png/v1/fill/w_417,h_250,q_70,strp/pokemon_x_and_y_cave_battle_background_1_by_phoenixoflight92_d844jms-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvMmZiMjgyMWEtMTQwNi00YTFkLTliMDQtNjY2OGYyNzhlOTQ0XC9kODQ0am1zLTJhOTcxNTQ2LTdjZDAtNDMzMy1iYzY3LTU4YTgxMjIxM2JiZC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.OhbiLrO65CmvTzh7_dyGjHB7Qr5E9DbpwrjuQHeBOvc"]

function displayBG(){


let randomBg = bg[Math.floor(Math.random()*bg.length)];

document.body.style.backgroundImage = `url(${randomBg})`;
}
displayBG()

document.createElement("h3")
h3.append()




