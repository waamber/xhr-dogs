console.log("YES, THIS IS DOG!");

function loadDogs(){
	var data = JSON.parse(this.responseText).dogs; 
	console.log("dogs:", data);
};

function error() {
	console.log("AHHHHH");
};

function breeds(){
	var data = JSON.parse(this.responseText).breeds; 
	console.log("breeds:", data);
};

var dogRequest = new XMLHttpRequest;
dogRequest.addEventListener("load", loadDogs);
dogRequest.addEventListener("error", error);
dogRequest.open("GET", "dogs.json");
dogRequest.send();

var breedRequest = new XMLHttpRequest;
breedRequest.addEventListener("load", breeds);
breedRequest.addEventListener("error", error);
breedRequest.open("GET", "breeds.json");
breedRequest.send();