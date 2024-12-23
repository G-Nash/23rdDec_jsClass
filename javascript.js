//debugger;
// you know what it is 

//hoisting- places all the vars at the top of the scope (on declaration not the value of it) even before the execution of the line.
//let and const placed in the temporal dead zone
//they won't get declared until their line gets executed. they also get hoisted but in a diff way (they get stored in TDZ)

//only vars can be placed at the top using hoisting and they are stored in the script.

// debugger;

// console.log(a)
// console.log(b)
// console.log(c)

// var a=2;

// let b=3;

// const c=3;

// console.log(a,b,c);



//control statements -looping statements, conditional statements
//loops
//while
//do while
//for
//for in --- for (interator in var){}
//for of

//conditional stattements
//if-else


//for-in --- used to iterate through indices of a variable like string/array/object
// nm="abcdefgh";
// for(i in nm){
//     console.log(nm[i]);
// }

//interating through a array
// nm=["rj", "mnsr", "nash"]
// for(i in nm){
//     console.log("hello", nm[i])
// }

// nm="asdfjklqwqw"
// for(i in nm){
//     console.log(`2 X ${i} = ${i*2}`)
// }





//for-off ---- it directly accesses the values and we can't use this (for-off) for iterating an object
// let nm="G_nash"
// for(i of nm){
//     console.log(i)
// }




//for ---normal for loop
// nm=["rjnh", "mnsr","gnsh"]

// for (i=0; i<nm.length; i++){
//     console.log(nm[i])
// }





// class task

let arr=["one","two", "three","four","five"]
for(let i in arr){
    console.log(`${+i+1} - ${arr[i]}`)
}
console.log("\n")
let j=0;
for (let i of arr){
    console.log(`${++j} - ${i}`)
}
