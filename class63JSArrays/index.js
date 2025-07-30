// can have the different datatype value

let arr =[1,2,4,5,7]
console.log(arr)
console.log(arr.length)
arr[0]=5666;
console.log(arr,typeof arr);
console.log(arr[0])
console.log(arr[0])
// array ar mutable 
// we can convert the arr to the strigs

// console.log(arr.toString(), typeof arr);
console.log(arr.join(" and "))
// pop
console.log(arr.pop())
arr.push(100);
console.log(arr)
arr.push("Chaitanya")
console.log(arr)
// shift is also their which helps in the removing the first element
console.log(arr.shift())
console.log(arr)
arr.unshift("Virat")
console.log(arr)
console.log(delete  arr[0])
console.log(arr)


let a1=[1,4,5,677,5]
let a2=[2,6,7,8]
let a3=[4,5,6,2]

console.log(a1.concat(a2,a3))
let number =[1,2,3,4]
// index one me se two number will get lost
 console.log(number.splice(1,2))
 console.log(number)
// we can add the num in the original array
 console.log(number.splice(1,2,55,66))
 console.log(number)
//  silce out the pice from the arr and creates the new arr
 console.log(number.slice(2))
 console.log(number)

 
