const player = getElementsByClassName('player')
const teamList = document.getElementById('teamList')
//constants for retrieval
var selectPlayer = document.getElementById('playerSelect')
const careerPoints = getElementsByClassName('careerPoints')
const careerAssists = getElementsByClassName('careerAssists')
const careerRebounds = getElementsByClassName('careerRebounds')
const team = getElementsByClassName('team')
const height = getElementsByClassName('height')
const weight = getElementsByClassName('weight')
const age = getElementsByClassName('rebound')
const jerseyNumber = getElementsByClassName('jerseyNumber')
const position = getElementsByClassName('position')

careerPoints = data.careerPoints
careerAssists = data.careerAssists
careerRebounds = data.careerRebounds
team = data.team
height = data.height
weight = data.weight
age = data.age
jerseyNumber = data.jerseyNumber
position = data.position
firstName = data.firstName
lastName = data.lastName

//var button = document.querySelector("#button");
//button.addEventListener('click', getPlayerById)

//var postTweet = document.querySelector("#tweet")
//postTweet.addEventListener('click', getTweet)
//Retrieving each data point from the array

const players = document.querySelectorAll(".player");
const playersContainer = document.querySelector(".allPlayersContainer");
const backButton = document.getElementById('back');
const singlePlayerContainer = document.getElementById("singlePlayerContainer")

playerSelect.addEventListener('click', addPlayerToTeam);


function addPlayerToTeam(data) {
  var listItem = document.createElement("li")
  teamList.appendChild(listItem)
  listItem.textContent(firstName, lastName)

}

for (i of players) {
    i.addEventListener('click', function() {
playersContainer.classList.add("hide");
console.log(event.target.id);
singlePlayerContainer.classList.remove("hide");

})}

backButton.addEventListener('click', function(){
    singlePlayerContainer.classList.add("hide");
    playersContainer.classList.remove("hide");
})


function getPlayerById(data){
	return data
}

var url = 'https://nba-player-individual-stats.p.rapidapi.com/players/'+getPlayerById;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f6bddce96msh1232c57308a1486p1f3d88jsn45d96f61b7f7',
		'X-RapidAPI-Host': 'nba-player-individual-stats.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

function showPlayerData(data) {
  for (i of players) {
      i.addEventListener('click',  getPlayerById()) 
      playersContainer.classList.add("hide");
      console.log(event.target.id);
      singlePlayerContainer.classList.remove("hide");
      
  // this function needs to hide the allPlayersContainer
  // grab the data points for that particular player's API ID and apply that data to each section
  playerIds = $.map($('.player'), button => button.id);
  getPlayerById(playerIds);
  careerPoints.insertAdjacentText("afterend", data.careerPoints);
  careerAssists.insertAdjacentText("afterend", data.careerAssists);
  careerRebounds.insertAdjacentText("afterend", data.careerRebounds);
  team.insertAdjacentText("afterend", data.team);
  height.insertAdjacentText("afterend", data.height);
  weight.insertAdjacentText("afterend", data.weight);
  age.insertAdjacentText("afterend", data.age);
  jerseyNumber.insertAdjacentText("afterend", data.jerseyNumber);
  position.insertAdjacentText("afterend", data.position);
  }
}

//var getTweet = function(event){
//	return event
//}

//const newUrl = 'https://peerreach.p.rapidapi.com/user/lookup.json?screen_name=' + getTweet;
//const reference = {
//	method: 'GET',
//	headers: {
//		'X-RapidAPI-Key': '4f6bddce96msh1232c57308a1486p1f3d88jsn45d96f61b7f7',
//		'X-RapidAPI-Host': 'peerreach.p.rapidapi.com'
//	}
//};

//try {
//	const response = await fetch(newUrl, reference);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}

function addPlayerToTeam(data) {
  var listItem = document.createElement("li")
  teamList.appendChild(listItem)
  listItem.textContent(firstName, lastName)

}

playerSelect.addEventListener('click', addPlayerToTeam);

for (i of players) {
    i.addEventListener('click', function() {
playersContainer.classList.add("hide");
console.log(event.target.id);
singlePlayerContainer.classList.remove("hide");

})}

backButton.addEventListener('click', function(){
    singlePlayerContainer.classList.add("hide");
    playersContainer.classList.remove("hide");
})
