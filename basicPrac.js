// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function countVowels(string){
	let vowels=['a','e','i','o','u']
	for(let i = 0; i < string.length; i++){
		for(let j=0; j < vowels.length; j++){
			if(string[i] === vowels[j]){
				console.log(string[i].length)
			}
		}
	}
}
countVowels('The quick brown fox')

///////////////////////////////////////////////////////////////

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223








function isGreaterThan( numberOne, numberTwo ){
  if (numberOne > numberTwo){
    return true;
  }
  else {
    return false;
  }
}
console.log(isGreaterThan(4,5))

///////////////////////////////////////////////////////////////

const volumeOfSphere = diameter => 
(1/6) * Math.PI * diameter * diameter * diameter

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

///////////////////////////////////////////////////////////////

const satellite = 'The Moon'
const galaxy = 'The Milky Way'
let stars = 'North Star'

const myNightSky = () => { return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;}

console.log(myNightSky())

///////////////////////////////////////////////////////////////

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);  
    }
  console.log(lightWaves);
};

visibleLightWaves();

///////////////////////////////////////////////////////////////

let myPlaces = ['peru', 'italy', 'tanzania']
let friendPlaces = ['italy', 'thailand', 'portland']

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
  
	for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
   if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
     console.log('match: ' + myPlaces[myPlacesIndex])
   }
  }
}

///////////////////////////////////////////////////////////////

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log("I want to eat "+ fruit))

///////////////////////////////////////////////////////////////

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
//let secretMessage= animals.map(function(animals){
 // return animals[0]
//})
let secretMessage = animals.map(animals => console.log(animals[0]))

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(bigNumbers =>bigNumbers / 100)

///////////////////////////////////////////////////////////////

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(num => num < 250 )

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

//let longFavoriteWords = favoriteWords.filter(function(word) {
  //return word.length > 7;
//});

// Refactor the code above using arrow function syntax

let longFavoriteWords = favoriteWords.filter(word => word.length > 7)

///////////////////////////////////////////////////////////////

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(function(word){
  return word.length > 5
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5 ));

///////////////////////////////////////////////////////////////

let day = 'Thursday'
let alarm;
let person = {
  name: 'Mila',
  age: 27,
  weekendAlarm:'No alarms needed',
  weekAlarm:'Alarm set to 7am',
  sayHello: () => {
    return 'Hello, there!'
  }
}

person.hobbies=['coding']

if ( day === 'Saturday' || day === 'Sunday'){
  alarm = 'weekendAlarm';
}
else {
  alarm = 'weekAlarm'
}

console.log(person['name'])
console.log(person['age'])
console.log(person[alarm])
console.log(person.hobbies)
console.log(person.sayHello())

///////////////////////////////////////////////////////////////

let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge){
  	if(typeof newAge === 'number') {
      this._age = newAge;
    }
    else {
      return 'Invalid input'
    }
	},
  
  get age(){
  console.log(`${this._name} is ${this._age} years old.`);
	return this._age;
}
};

person.age = 'Thirty-nine';
person.age = 39
console.log(person.age)