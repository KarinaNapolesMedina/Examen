// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// cordenadas del mapa del tesoro
const WIDTH = 400; //ancho de acuerdo a la imagen
const HEIGH = 400; //alto de acuerdo a la imagen

let target = { // aqui es donde se encuentra el mapa
  x: getRandomNumber(WIDTH), // aqui va a tener el ancho de nuetra imagen con la funcion getRandomNumber
  y: getRandomNumber(HEIGH) // aqui va a tener el alto de nuetra imagen con la funcion getRandomNumber
};

// controlador de click
let $map = document.querySelector('#map'); //refenciamos con la imagen que se ncuentra en el documento index.html
let $distance = document.querySelector('#distance');
let clicks = 0; // variable para obtener los clicks

// se agrega un escuchador para cuando el usuario de click se ejecute la funcion
$map.addEventListener('click', function (e) {
  console.log('click'); // aqui se puede ver en la consola cuando el usuario da click 
  clicks++; // incrementamos los clicks
  let distance = getDistance(e, target); // aqui esta la distancia en la que encuentra el mapa y el usuario
  let distanceHint = getDistanceHint(distance); // le pasamos la distancia a la funcion etDistanceHint 
  $distance.innerHTML = `<h1>${distanceHint}</h1>`; //aqui colocamos la palabra de que tan cerca o lejos esta el usuario del mapa

  //decirle al usuario que ha encontraso el mapa
  if (distance < 20 ) {
    alert(`Has encontrado el tesoro en:  ${clicks} clicks!`); //mensage emergente de que ha ganado
    location.reload();// una vez encontrado el mapa se recarga el juego automaticamente.
  }
});
