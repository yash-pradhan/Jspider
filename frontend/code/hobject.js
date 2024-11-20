// let student= {
//     name : "yash",
//     percent : 33,
//     hobbies: ['reading', 'writing'],
//     subject: {
//         web : 80,
//         sql : 30
//     },
//     isPresent : true
    
// }

// console.log(student);

// console.log(student.hobbies);

// console.log(student.subject.web);



// student.isPresent = false
// console.log(student.isPresent) //change the value


// student.age = 22
// console.log(student); // add new key value pair


// delete student.percent;
// console.log(student); // delete a key value pair

// steps to create a object
//using function
function run(speed, startTime, endTime){
    this.speed = speed,
    this.startTime = startTime,
    this.endTime = endTime
}


let x = new run('40km/h', '10:00', '11:00', '39km/h')
console.log(x);

//using class

class Car{
    constructor (speed, milage, warrenty, ownername, brandName){
        this.speed = speed,
        this.milage = milage,
        this.warrenty= warrenty,
        this.ownername = ownername,
        this.brandName = brandName
    }
}

let mercidese = new Car('100km/h', '20km', '15yr', 'Mr. pradhan', 'mercidese')
console.log(mercidese);

run.prototype.averagespeed = averagespeed;


