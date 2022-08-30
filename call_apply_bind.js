
// call() 

const obj ={

    id:877,
    firstName:'abc',
    lastName:'xyz',
    phoneNumber:957,
    location:'chennai ,tamilnadu',
}

// const fullName = function(){
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`
// }

// console.log(fullName.call(obj));


const updateNumber = function(num){
    this.phoneNumber = num
}
updateNumber.call(obj,64873778874)
console.log(obj.phoneNumber);


const updateLocation = function(loca,state){
 this.location = `${loca} ${state}`
}

updateLocation.call(obj,'tuti','tamilnadu')
console.log(obj);


const arr = [3,7,23,89,1]
const a = Math.max.apply(arr,arr)
console.log(a);


//bind()

const person1 = {
    name1 : 'abc'
}

const person2 ={
    name1 : 'pqr'
}

const greeting = function(){
    return `welcome ${this.name1}`
}

console.log(greeting.call(person2));