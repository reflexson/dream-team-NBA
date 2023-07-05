const players = document.querySelectorAll(".player");
const playersContainer = document.querySelector(".allPlayersContainer");
const backButton = document.getElementById('back');
const singlePlayerContainer = document.getElementById("singlePlayerContainer")
var headshot = document.getElementById("indHS");
const playerSelect = document.getElementById("playerSelect");
var playerName = document.getElementById("playerName");
const teamList = document.getElementById("teamList");
var dreamTeam = [];
var careerPoints = document.getElementById("careerPoints");
var careerAssists = document.getElementById("careerAssists");
var careerRebounds = document.getElementById("careerRebounds");
var team = document.getElementById("team");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var age = document.getElementById("age");
var position = document.getElementById("position");
var playerName = document.getElementById("playerName");
// var dreamTeamUnique = [...new Set(dreamTeam)];

for (i of players) {
    i.addEventListener('click', function() {
playersContainer.classList.add("hide");
// console.log(event.target.id);
singlePlayerContainer.classList.remove("hide");
headshot.src =`/assets/imgs/headshots/${event.target.id}.webp`;

var url = `https://nba-player-individual-stats.p.rapidapi.com/players/${event.target.id}`;
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "074f71ff22mshc4afea98902052bp106735jsn86706159c307",
        "X-RapidAPI-Host": "nba-player-individual-stats.p.rapidapi.com"
    }
};
fetch(url, options)
.then(response => response.json()) 
    .then(data => {
      console.log(data);
      position.textContent= data.position;
      playerName.textContent = data.firstName + " " +data.lastName;
      careerPoints.textContent = data.careerPoints;
      team.textContent = data.team;
      careerRebounds.textContent = data.careerRebounds;
      careerAssists.textContent = data.carrerAssists;
      height.textContent = data.height;
      weight.textContent = data.weight;
      age.textContent = data.age;


    })














})}

backButton.addEventListener('click', function(){
    singlePlayerContainer.classList.add("hide");
    playersContainer.classList.remove("hide");
})

playerSelect.addEventListener("click", function(){
    // dreamTeam = [];
    // dreamTeamUnique = [...new Set(dreamTeam)];
    if(dreamTeam.length < 5){
    dreamTeam.push(playerName.textContent)
  

var listItem = document.createElement("li");
var listSpan = document.createElement("span")
teamList.appendChild(listItem);
listItem.classList.add("teamLi")
listItem.textContent = playerName.textContent;
listItem.append(listSpan);
// listSpan.textContent = "x";
listSpan.classList.add("close");
var closebtns = document.getElementsByClassName("close");
var i;
for (i = 0; i < closebtns.length; i++) {
//    var dreamTeamArray = dreamTeam
//    console.log(dreamTeamArray);
    closebtns[i].addEventListener("click", function() {
        // var closebtnsArray = Array.prototype.slice.call(closebtns);
        // var indexNum=closebtnsArray[1];
        // console.log(indexNum);
        // // console.log(dreamTeamArray);
        // dreamTeamArray.splice(indexNum,indexNum);
      this.parentElement.remove(listItem);
    //   localStorage.setItem("userTeam", JSON.stringify(dreamTeam));
    });
  }

    }
    localStorage.setItem("userTeam", JSON.stringify(dreamTeam));

} )