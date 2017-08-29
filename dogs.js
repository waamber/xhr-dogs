function loadDogs(){
	var dogsData = JSON.parse(this.responseText).dogs; 
	getBreeds(dogsData);
	// combinedArray();
};

function error() {
	console.log("AHHHHH");
};

var dogRequest = new XMLHttpRequest;
dogRequest.addEventListener("load", loadDogs);
dogRequest.addEventListener("error", error);
dogRequest.open("GET", "dogs.json");
dogRequest.send();

function getBreeds(dogsData){
	var breedRequest = new XMLHttpRequest;
	breedRequest.addEventListener("load", breeds);
	breedRequest.addEventListener("error", error);
	breedRequest.open("GET", "breeds.json");
	breedRequest.send();

	function breeds(){
		var breedsData = JSON.parse(this.responseText).breeds; 
		combinedArray(dogsData, breedsData);
	}
};

//loop through dogs and look at breed_id
//loop through breeds and match breed_id 
//make final price
function combinedArray(dogsArray, breedsArray){
	dogsArray.forEach(function(dog){
		var currentBreedId = dog["breed-id"]; //bc of -  without the - you would put dog.breedid
		breedsArray.forEach(function(breed){
			if(currentBreedId === breed.id){
				dog["dogBreed"] = breed.name; //adding new property to dogsArray assigning the value from the breedArray
				dog["basePrice"] = breed["base-price"];
				dog["description"] = breed.description;
				dog["finalPrice"] = dog["add-on-price"] + dog.basePrice; //adds prices to create final price
			}
		});
	});
	console.log("all dogs", dogsArray);
	domString(dogsArray);
};

function domString(dogs){
	var dogString = "";
	for(var i = 0; i < dogs.length; i ++){
		dogString += `<div class="dogCard">
												<h1>${dogs[i].name}</h1>
												<h3>${dogs[i].color}</h3>
												<div class= "dogImg"><img src ="${dogs[i].url}"></div>
												<h4>${dogs[i].finalPrice}</h4>
									</div>`;
	}
	writeToDom(dogString);
};

function writeToDom(dogs){
		var dogContainer = document.getElementById("dogContainer");
		dogContainer.innerHTML = dogs; 
};







