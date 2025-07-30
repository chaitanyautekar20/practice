// console.log('Chaitanya');
// alert('Happy');
// this is the promise with resoleve and reject as two function it will tell when to resolev and when to reject
const prom1=  new Promise((resolve, reject) => { 
    let a=Math.random()
    if(a<0.5){
        reject("No random number was not supporing you")
    }
    else{
    setTimeout(() => {
        console.log('This is the promise');
        resolve("Chaitanya")
    }, 3000);
    }
 })

const prom2=  new Promise((resolve, reject) => { 
    let a=Math.random()
    if(a<0.5){
        reject("No random number was not supporing you err2")
    }
    else{
    setTimeout(() => {
        console.log('This is the promise 2');
        resolve("Chaitanya")
    }, 1000);
    }
 })

// let p3 =Promise.all([prom1,prom2])
let p3 =Promise.allSettled([prom1,prom2])

//  prom1.then((a)=>{
//     console.log(a)
//  }).catch((err)=>{
//     console.log(err)
//  })


p3.then((a)=>{
    console.log(a)
 }).catch((err)=>{
    console.log(err)
 })
