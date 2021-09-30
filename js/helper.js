// generar un numero aleatorio
let getRandomNumber = size => { //se genera una funcion flecha, para generar numoros aleatorios desde 0
  //convertimos los numeros decimales a enteros con floor
  return Math.floor(Math.random() * size); //se genera un numero aleatorio el cual sera multiplicado por size(el tamaño que se ingrese )
}

// obtener la distancia de dos puntos (usuario - mapa)
let getDistance = (e, target) => { //funcion para obtener la distancia con 2 parametros(los puntos)
  let diffX = e.offsetX - target.x; //diferencia del eje x (donde a dado click el usuario y)
  let diffY = e.offsetY - target.y; //diferencia del eje y (donde se encuetra el tesoro)
  return Math.sqrt((diffX * diffX) + (diffY * diffY)); //se obtiene la raiz cuadrada de la suma de los catetos al cuadrado (multiplicado por si mismo)
}

// devolver un String dependiendo de las distancias 
let getDistanceHint = distance => { //funcion de las pistas de que tan cerca o lejos esta del tesoro
  if (distance < 30) {
    return "Hirviendo!";
  } else if (distance < 40) {
    return "Muy caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Calido";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Realmente frio";
  } else {
    return "Congelado!";
  }
}
