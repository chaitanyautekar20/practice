console.log("code is running")

// var a=10;
// var b=20;
// var c="Chaitanya";

// console.log(a+b)

// console.log(typeof a, typeof b ,typeof c)

// let and const will have the block 
// var will work as golbal
// const will not be updated
let a=10;
// const b=20;
// b+=21; not allowed
{   
    let a=20
    console.log(a)
}
console.log(a)



let q="happy";
let w=10;
let e=1.2;
let r=undefined;
let t=null;
const y=true;

console.log(q,w,e,r,t,y)
console.log(typeof q,typeof w,typeof e,typeof r,typeof t,typeof y)
// object code
// key value
// we can also write function 
let o ={
    "name":"Chaitanya",
    "job code":23300
}
o.sallary ="100 cores";

console.log(o)

o.sallary ="500 cores";
console.log(o)
