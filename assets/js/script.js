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


startup();


//event listener for all player buttons

for (i of players) {
    i.addEventListener('click', function() {
playersContainer.classList.add("hide");
// console.log(event.target.id);
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
//   console.log(dreamTeamUnique)
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
    closebtns[i].addEventListener("click", function() { 
        dreamTeamUnique = dreamTeamUnique.filter(function (trim) {
            return trim !== event.target.id;
        });
        dreamTeam = dreamTeamUnique;
        localStorage.setItem("userTeam", JSON.stringify(dreamTeam));
        // console.log(dreamTeamUnique);
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



// var listItem = document.createElement("li");
// var listSpan = document.createElement("span")
// teamList.appendChild(listItem);
// listItem.classList.add("teamLi")
// listItem.textContent = playerName.textContent;
// listItem.append(listSpan);
// listSpan.textContent = "x";
// listSpan.classList.add("close");
// var closebtns = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < closebtns.length; i++) {
//    var dreamTeamArray = dreamTeam
//    console.log(dreamTeamArray);
    // closebtns[i].addEventListener("click", function() {
        // var closebtnsArray = Array.prototype.slice.call(closebtns);
        // var indexNum=closebtnsArray[1];
        // console.log(indexNum);
        // // console.log(dreamTeamArray);
        // dreamTeamArray.splice(indexNum,indexNum);
    //   this.parentElement.remove(listItem);
    //   localStorage.setItem("userTeam", JSON.stringify(dreamTeam));
    // });
//   }

    // }
    // localStorage.setItem("userTeam", JSON.stringify(dreamTeam));

// } )