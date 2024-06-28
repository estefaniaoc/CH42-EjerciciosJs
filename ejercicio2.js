/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] */

const doublesArray = (array) =>
    {
        let array2= [ ];
        for (let index = 0; index < array.length; index++) {
            const element = array[index]*2
            array2.push(element)   
        }
        console.log("Double of the array",array2) 
    }
doublesArray([1,2,4,5])

//Usando map()

const doublesArrayMap = (array) => {
    const array2 = array.map(element => element * 2);
    console.log("Double of the array", array2);
}

doublesArrayMap([1, 2,4, 5]);