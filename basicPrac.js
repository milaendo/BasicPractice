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

