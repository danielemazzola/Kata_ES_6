/* Ejercicio 12

Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */
const findArrayIndex = (array, text) => {
  return array.indexOf(text)
}
/* Ej array: */
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
findArrayIndex(mainCharacters, 'Luke')
findArrayIndex(mainCharacters, 'Leia')
findArrayIndex(mainCharacters, 'Chewbacca')
findArrayIndex(mainCharacters, 'Anakin')
