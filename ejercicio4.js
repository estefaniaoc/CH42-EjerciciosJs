/* Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
for (let i = 0; i< student1Courses.length; i++) {
  for (let j = 0; j < student2Courses.length; j++) {
    if (student1Courses[i]===student2Courses[j]) {
        console.log(`Common course ${student1Courses[i]}`)
    }   
  }
    }
//Using filter and includes()


let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
console.log("Common Courses", commonCourses)