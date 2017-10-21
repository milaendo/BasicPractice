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

// [11:45] 
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