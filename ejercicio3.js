/* 
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

var total = [0,1,2,3].reduce(function(a,b){
    return a+b;
});
console.log("Suma acumulativa",total)

var multiplicacionArray = [1,2,3].reduce(function(a,b){
    return a * b
});
console.log("Multiplicacion acumulativa",multiplicacionArray)

//Using function
const sumArray = (array) =>{
   
    const sumWithInitial = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );
    console.log("Accumulative sum = "+sumWithInitial)
}
sumArray([1,2,3,4])

const productArray = (array) =>{
    
    const product = array.reduce(
        (accumulator,currentValue) => accumulator * currentValue, 1
    )
    console.log("Accumulative product = " + product)
}
productArray([1,2,3])
