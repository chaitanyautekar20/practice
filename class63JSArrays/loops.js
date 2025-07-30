let arr=[1,33,99,45,100]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}

// for each loop
arr.forEach((value,index,array) => {
    console.log(value,index,arr)
});


// this is use for the object 
let obj={
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (const key in obj) {
    // some obj have built in property which we do not want so we use if statement
    // this if statement is for the object of our own 
    // bassically for the non inheretaied property
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,obj)
    }
}

// for of loop is for array

let num=[1,2,3,4,5]

for (const element of num) {
    console.log(element)
}