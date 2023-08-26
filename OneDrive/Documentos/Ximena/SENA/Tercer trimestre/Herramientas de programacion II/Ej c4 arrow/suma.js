//arrow fuction de suma
const suma = (a,b) => a+b;
console.log(sumar(5,3))

//numero par
const esPar = (num) => num % 2 === 0
console.log(esPar(10))

//elevar al cuadrado un array de numeros
const numeros = [1,2,3,4]
const cuadrados = numeros.map(num => num**2);

console.log(cuadrados)

//numeros mayores de 6 en un array 
const numerosMayores = [2,5,7,6,8,10]
const mayoresQue6 = numerosMayores.filter(number => number )