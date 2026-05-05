
let names = ["ahmed", "muna", "marwa","maryan","hodan", "hassan"]

console.log(names)
// arrays methods 
console.log(names.length)
console.log(names[3])
console.log(names)
//add item to names to the arrays
names.push("cismaan")
console.log(names)

//removes last name 

// names.pop()
// console.log(names)

//check if item axist in the list 

if(names.includes("maxamed")){
    console.log("maxamed is in the list")
} else{
    console.log("maxamed is not in the list")
}
if(names.includes("marwa")){
    console.log("marwa is in the list")
} else{
    console.log("marwa is not in the list")
}


//transform item 

let Upper = names.map(function (name){ 
     return name.toUpperCase()

})

console.log(Upper)


let numbers = [2,3,5,6,7,8,8,9,]

let square = numbers.map(function (num){
   return  num * num

})
console.log(numbers)

console.log(square)

//remove items condionally 


let AboveSix = numbers.filter(function (num){
    if(num > 6){
        return num
    }
})

console.log(AboveSix)

// Objects 


let User = {
    name:"ahmed",
    age:20,
    isActive:true,
    isAdmin:false,
    address:"Hargaisa",
    phoneNumber:"252633306376"

}

console.log(User)

User.name = "maxamed"
console.log(User)


//Using arrays and Objects together 

let Users = [
  {
    name:"maxamed",
    age:20,
    isActive:true,
    isAdmin:false,
    address:"Hargaisa",
    phoneNumber:"252633306376"

},
{
    name:"faarax",
    age:20,
    isActive:true,
    isAdmin:false,
    address:"Hargaisa",
    phoneNumber:"252633306376"

},
{
    name:"siciid",
    age:20,
    isActive:true,
    isAdmin:false,
    address:"Hargaisa",
    phoneNumber:"252633306376"

},
{
    name:"ahmed",
    age:20,
    isActive:true,
    isAdmin:false,
    address:"Hargaisa",
    phoneNumber:"252633306376"

}
]

console.log(Users)