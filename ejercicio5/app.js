/* Ejercicio 5 - Filter */
/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const filter1 = ages.filter((value) => {
  const result = value > 18 ?? value
  return result
})
console.log(filter1)

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const filter2 = ages1.filter((value) => {
  const result = value % 2 === 0 ?? value
  return result
})
console.log(filter2)

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const filter3 = streamers.filter((value) => {
  const result = value.gameMorePlayed.includes('League of Legends') ?? value
  return result
})
console.log(filter3)

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const filter4 = streamers1.filter((value) => {
  const result = value.name.includes('u') ?? value
  return result
})
console.log(filter4)

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const filter5 = streamers2.filter((value) => {
  if (value.gameMorePlayed.includes('League')) {
    if (value.age > 35) {
      value.gameMorePlayed = value.gameMorePlayed.toUpperCase()
      return value
    }
    return value
  }
})
console.log(filter5)
