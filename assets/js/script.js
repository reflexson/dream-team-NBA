const players = document.querySelectorAll(".player");
const playersContainer = document.querySelector(".allPlayersContainer");
const backButton = document.getElementById('back');
const singlePlayerContainer = document.getElementById("singlePlayerContainer")
var headshot = document.getElementById("indHS");

for (i of players) {
    i.addEventListener('click', function() {
playersContainer.classList.add("hide");
console.log(event.target.id);
singlePlayerContainer.classList.remove("hide");
headshot.src =`/assets/imgs/headshots/${event.target.id}.webp`;


})}

backButton.addEventListener('click', function(){
    singlePlayerContainer.classList.add("hide");
    playersContainer.classList.remove("hide");
})