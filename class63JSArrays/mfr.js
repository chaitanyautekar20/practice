let arr=[1,2,3,4,5,6]
// let newarr=[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)

// helps in creating new array
let newarr =arr.map((e)=>{
    return e**2
})

console.log(newarr)


// filter 

const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newarr.filter(greaterthanseven))

// reduce function

let arr2=[1,2,3,4,5,6]

const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))

// from used to convert into array

console.log(Array.from("Chaitanya"))