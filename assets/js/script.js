const url = 'https://api-nba-v1.p.rapidapi.com/players?id=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f6bddce96msh1232c57308a1486p1f3d88jsn45d96f61b7f7',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}