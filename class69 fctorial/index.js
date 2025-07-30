let a =6

function factorial(number){
    // short cut to make array 1 to n
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
   let c= arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial(a)

function facfor(number){
    let fac=1;
    for (let index = 1; index <=number; index++) {
        fac=fac*index
        
    }
    return fac
}

let ans =facfor(6)
console.log(ans)