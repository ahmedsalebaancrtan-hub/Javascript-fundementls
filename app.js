

// console.log("hello world")

// //declaring variable in js
// // uses (let: when values is changes const: when values doesnt change var: old version of let )

// const fName  = "ahmed"
// const lName = "saleban"
// let middleName = "crtan"
// middleName = "cartanooz"
// console.log(middleName)


// // lName = "maxamed"

// console.log(fName)
// console.log(lName)
// // console.log(lName)


// //functions 

// function Greeting(name) {
//     return "asc " + name

// }

// let messege = Greeting("sidiiq")


// function Add(a, b){

//     let result = a + b;
//     return "the sum of " +  a,  "and" +  b  + "is equel to" + result

// }

// let sum = Add(10, 10)
// console.log(sum)

// console.log(messege)




// let title = document.querySelectorAll("#title")
let  title = document.querySelector("#title")

let btn = document.querySelector("#btn")
let InputAge = document.querySelector(".Input")
let btnAge = document.querySelector("#btnAge")


let InputEl = document.querySelector("input")

function sayHello() {
   let name =  InputEl.value

   if (name == "") {
    alert("please enter valid name")
    return;
   }

   let messege = "asc " + name + ". fadlan soo dhawoow"

   title.textContent = messege
}

function verifyAge() {
    const age = +(InputAge.value)
   
    // if(age < 12) {
    //     alert("You are too Young to use this platform")
    // return
    // }
    // else if (age > 65) {
    //     alert("You are too old to Use this platform")
    // return  
    // }

    if (age <= 12 || age >= 65 ){
        alert("You are not aligible")
        return
    }

    alert("welcome to the platform")
}

btn.addEventListener('click', sayHello)
btnAge.addEventListener("click", verifyAge)

