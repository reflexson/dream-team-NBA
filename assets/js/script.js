const player = getElementsByClassName('player')
//constants for retrieval
const careerPoints = getElementsByClassName('careerPoints')
const careerAssists = getElementsByClassName('careerAssists')
const careerRebounds = getElementsByClassName('careerRebounds')
const team = getElementsByClassName('team')
const height = getElementsByClassName('height')
const weight = getElementsByClassName('weight')
const age = getElementsByClassName('rebound')
const jerseyNumber = getElementsByClassName('jerseyNumber')
const position = getElementsByClassName('position')

var button = document.querySelector("#button");
button.addEventListener('click', getPlayerById)

var postTweet = document.querySelector("#tweet")
postTweet.addEventListener('click', getTweet)
//Retrieving each data point from the array

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


function getPlayerById(data){
	return data
}

const url = 'https://nba-player-individual-stats.p.rapidapi.com/players/'+getPlayerById;
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

var getTweet = function(event){
	return event
}

const newUrl = 'https://peerreach.p.rapidapi.com/user/lookup.json?screen_name=' + getTweet;
const reference = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f6bddce96msh1232c57308a1486p1f3d88jsn45d96f61b7f7',
		'X-RapidAPI-Host': 'peerreach.p.rapidapi.com'
	}
};

try {
	const response = await fetch(newUrl, reference);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const got = require('got');
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const qs = require('querystring');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = "a29RT3NRVEh0SUwtMTdsYWFlbUk6MTpjaQ";
const consumer_secret = "fbx8xFNjF3FFV6WBxof4hkHyje77luRoKxz-JEpGPfrnHgVLFh";
const oauth_token = "1674209381028642816-bGQgohDUH5jicjACnXOr5LqK4DSI9Z";
const oauth_token_secret = "h4wXBcNiQWmHeZ1yQjPVYLaxrtMe8S7gRXHnpauWjaWxU";

// Be sure to add replace the text of the with the text you wish to Tweet.
// You can also add parameters to post polls, quote Tweets, Tweet with reply settings, and Tweet to Super Followers in addition to other features.
const data = {
  "text": "Tweet your team!"
};

const endpointURL = `https://api.twitter.com/2/tweets`;

// this example uses PIN-based OAuth to authorize the user
const requestTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob&x_auth_access_type=write';
const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';
const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});

async function input(prompt) {
  return new Promise(async (resolve, reject) => {
    readline.question(prompt, (out) => {
      readline.close();
      resolve(out);
    });
  });
}

async function requestToken() {
  const authHeader = oauth.toHeader(oauth.authorize({
    url: requestTokenURL,
    method: 'POST'
  }));

  const req = await got.post(requestTokenURL, {
    headers: {
      Authorization: authHeader["Authorization"]
    }
  });
  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}


async function accessToken({
  oauth_token,
  oauth_token_secret
}, verifier) {
  const authHeader = oauth.toHeader(oauth.authorize({
    url: accessTokenURL,
    method: 'POST'
  }));
  const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`
  const req = await got.post(path, {
    headers: {
      Authorization: authHeader["Authorization"]
    }
  });
  if (req.body) {
    return qs.parse(req.body);
  } else {
    throw new Error('Cannot get an OAuth request token');
  }
}


async function getRequest({
  oauth_token,
  oauth_token_secret
}) {

  const token = {
    key: oauth_token,
    secret: oauth_token_secret
  };

  const authHeader = oauth.toHeader(oauth.authorize({
    url: endpointURL,
    method: 'POST'
  }, token));

  const req = await got.post(endpointURL, {
    json: data,
    responseType: 'json',
    headers: {
      Authorization: authHeader["Authorization"],
      'user-agent': "v2CreateTweetJS",
      'content-type': "application/json",
      'accept': "application/json"
    }
  });
  if (req.body) {
    return req.body;
  } else {
    throw new Error('Unsuccessful request');
  }
}


(async () => {
  try {
    // Get request token
    const oAuthRequestToken = await requestToken();
    // Get authorization
    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);
    console.log('Please go here and authorize:', authorizeURL.href);
    const pin = await input('Paste the PIN here: ');
    // Get the access token
    const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());
    // Make the request
    const response = await getRequest(oAuthAccessToken);
    console.dir(response, {
      depth: null
    });
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
})();