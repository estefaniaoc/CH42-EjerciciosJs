 // filtered is [12, 130, 44]
/*   Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.Write a command that prints out all of the people in the list.
2.Write the command to remove "Dani" from the array.
3.Write the command to remove "Juan" from the array.
4.Write the command to move "Luis" to the front of the array.
5.Write the command to add your name to the end of the array.
6.Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */
console.log("Ejercicio 5")
//1
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    console.log(element)
}
/* for(let p of people){
    console.log(p)
} 
 */
//2
let index = people.indexOf("Dani");
if (index !== -1) {
    people.splice(index, 1);
}

console.log("Removed Dani, the array is ",people);

//3
let indexJuan = people.indexOf("Juan");
if (indexJuan !== -1) {
    people.splice(indexJuan, 1);
}

console.log("Remove Juan from the array:", people);

//4
let indexLuis = people.indexOf("Luis");
let Luis= people.splice(indexLuis,1)[0];
people.unshift(Luis);
console.log("Luis in the front",people)

//5
people.push("Estefania")
console.log("Add my name",people)

//6
for (let i = 0; i <people.length; i++) {

        console.log(people[i])
        if (people[i]==="Maria") {
            console.log("Break in "+ people[i])
            break
        
    }

}
//7
let indexMaria = people.indexOf("Maria")
console.log("Index Maria " + indexMaria)
console.log("4 people in the array ",people)
