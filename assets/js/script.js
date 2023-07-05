// Rapid API - NBA Player Individual Stats
// for headshots, they will be linked by the API player ID number to the image source 
// for stats, they will be fetched from the API by 
// for twitter, the link to twitter

// Twitter API - Manage a tweet --> Post a tweet
// the twitter link will be at the bottom of the team list
// when clicked, the user will be taken to twitter post a poll with the 5 selected players names input as media
// 1674208896070860800CodenameTob

// ---------------------------------------------
// NBA Player Individual Stats sample code
// Each player button box
const player = document.getElementsByClassName('player')
const teamList = document.getElementById('teamList')

// Player select button
var selectPlayer = document.getElementById('playerSelect')

// constants for the receiving locations of each player's data
const careerPoints = document.getElementById('careerPoints')
const careerAssists = document.getElementById('careerAssists')
const careerRebounds = document.getElementById('careerRebounds')
const team = document.getElementById('team')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const age = document.getElementById('age')
const jerseyNumber = document.getElementById('jerseyNumber')
const position = document.getElementById('position')

// Retreiving each data point from the array
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

// function event target.id to grab the id of the button and run the fetch id function
function getPlayerById(data){
    return data
}

var url = 'https://nba-player-individual-stats.p.rapidapi.com/players/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '074f71ff22mshc4afea98902052bp106735jsn86706159c307',
		'X-RapidAPI-Host': 'nba-player-individual-stats.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error)};


// put the data for the clicked on player in each data point section
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
    }}


// click event listener to each player that will run the getPlayerById function
// That same click needs to run the showPlayerData function
// player.addEventListener('click', getPlayerById);



// Create the list item from a click on the player button, append child list item to the id "teamList"
function addPlayerToTeam(data) {
    var listItem = document.createElement("li")
    teamList.appendChild(listItem)
    listItem.textContent(firstName, lastName)

}

playerSelect.addEventListener('click', addPlayerToTeam);

const players = document.querySelectorAll(".player");
const playersContainer = document.querySelector(".allPlayersContainer");
const backButton = document.getElementById('back');
const singlePlayerContainer = document.getElementById("singlePlayerContainer")


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







  