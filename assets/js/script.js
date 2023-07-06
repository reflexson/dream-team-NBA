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
var dreamTeamUnique = [...new Set(dreamTeam)];
var teamContainer = document.querySelector(".teamContainer");
var yourTeam = document.querySelector(".your-team");

startup();

//event listener for all player buttons


for ( i of players) {
  console.log("I: ", i)
    i.addEventListener('click', function(event) {
playersContainer.classList.add("hide");
console.log(event.target.id);
singlePlayerContainer.classList.remove("hide");
headshot.src =`./assets/imgs/${event.target.id}.webp`;

//api fetch for player info

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


//go back to player select screen

backButton.addEventListener('click', function(){
    singlePlayerContainer.classList.add("hide");
    playersContainer.classList.remove("hide");
})

//add player to dreamTeam

playerSelect.addEventListener("click", function(){
    
    if(dreamTeamUnique.length < 5){
    dreamTeam.push(playerName.textContent)
    dreamTeamUnique = [...new Set(dreamTeam)];
    if (dreamTeamUnique.length == 0) {
      yourTeam.classList.add("hide")
    } else {
      yourTeam.classList.remove("hide")
    }
  }


    clearAll();
    makeDreamTeamList();
    closeAction();
    
})

//function to make list based on dreamTeamUnique array

function makeDreamTeamList(){
    for (i = 0; i < dreamTeamUnique.length; ++i) {
        var listItem = document.createElement("li");
        var listSpan = document.createElement("span")
        teamList.appendChild(listItem);
        listItem.classList.add("teamLi")
        listItem.textContent = dreamTeamUnique[i];
        listItem.append(listSpan);
        // listSpan.textContent = "x";
        listSpan.setAttribute('id', dreamTeamUnique[i]);

        listSpan.classList.add("close");
    }
    dreamTeam = dreamTeamUnique;
    localStorage.setItem("userTeam", JSON.stringify(dreamTeam));
    closeAction();

}

//function to add close button behavior

function closeAction(){
var closebtns = document.getElementsByClassName("close");
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function(event) { 
        dreamTeamUnique = dreamTeamUnique.filter(function (trim) {
            return trim !== event.target.id;
        });
        dreamTeam = dreamTeamUnique;
        localStorage.setItem("userTeam", JSON.stringify(dreamTeam));
        if (dreamTeamUnique.length == 0) {
          yourTeam.classList.add("hide")
        } else {
          yourTeam.classList.remove("hide")
        }
        clearAll();
        makeDreamTeamList();
    });
}
}

//function to clear list

function clearAll() {
    while (teamList.firstChild) {
    teamList.removeChild(teamList.firstChild);
    }

 }
 

 // function to grab list from local storage and populate

 function getPreviousTeam(){
    pastTeam = JSON.parse(localStorage.getItem("userTeam"));
    dreamTeam = pastTeam;
    dreamTeamUnique = [...new Set(dreamTeam)];


 }

 //startup function

 function startup(){
    getPreviousTeam();
    makeDreamTeamList();
    if (dreamTeamUnique.length == 0) {
      yourTeam.classList.add("hide")
    } else {
      yourTeam.classList.remove("hide")
    }
 }


  // Bearer Token you obtained from Twitter
  const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAOb4oQEAAAAAFeJwNfyegHdud9d6HBkdqYLxC1o%3Dd6J64EZTux5kbbgVyIaXyWoA6vCxEmSYNKuXpvuzSYd1bzzfuR';
      
  // Function to open the tweet composer window
  function openTweetComposer() {
    const tweetContentElement = document.getElementById('teamList');
    const urlTryIt = "https://reflexson.github.io/dream-team-NBA/";
    const tweetTitle = "Check out my NBA Dream Team!";
    const tweetText = encodeURIComponent(tweetTitle + "\n" + "\n" + tweetContentElement.innerText + "\n" + "\n" + "Try it for yourself!" + "\n" + urlTryIt ); // Replace with the names on the team list
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

    window.open(tweetUrl, '_blank', 'width=550,height=420');
    let mySound = new Audio('./assets/audio/ball.mp3')
    mySound.play()
  }

  // Event listener for the tweet button
  document.getElementById('twitter').addEventListener('click', openTweetComposer);