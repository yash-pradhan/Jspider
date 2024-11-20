// // function sum(a, b){
// //     return a+b;
// // }

// // function checkOdd(a)
// // {
// //     return true 
// // }

// // console.log(typeof sum)
// // console.log(typeof checkOdd)


// const human= {
//     name : "adamn",
//     spouse_name: "evean",
//     age : 45,
//     canFly: false,
//     canswim: function swim(){
//         return true;
//     },
//     child :{
//         name : "alla",
//         age: 23,
//         get spouse_name(){
//             return human.spouse_name;
//         }
//     }
// }

// console.log(human.child.spouse_name);

// // let text;
// //  for ( i in human){
// //     text += human[i]+ " ";
// //  }

// let text = Object.values(human); 



// document.getElementById("p").innerHTML= text;



//object function

class cityy {
    constructor(cityarea1, standardtime1, leadername1) {
        this.cityarea = cityarea1;
        this.standardtime = standardtime1;
        this.leadername = leadername1;

    }
}

cityy.prototype.changearea = function(area){
    this.cityarea = area
}

const bengaluru = new cityy("234sf", 12.33, "Ram");

console.log(bengaluru.cityarea);

bengaluru.changearea("45sf")

console.log(bengaluru.cityarea);
