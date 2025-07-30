async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// sum function
function sum(a,b,c){
    return a+b+c;
}

// we can not use it two times so we need to make immidately async function
// we call this iif imediately invoke funtion
(async function main() {
    //this will show undefined and the but will not the show the error of not decleared
    //this hoisting in which decleation comes on the top but value is give at the bottom
    console.log(a1);
    
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    //this is dstructuring
    // let [x,y,...rest]=[1,2,3,45,6]
    // console.log(x,y,rest);
    
    // using the dstructuring in object
    let obj={
        a: 1,
        b: 2,
        c:  3
    }
    let {a,b}=obj
    console.log(a,b);
    let arr=[1,2,3]
    // we can do
    console.log(sum(arr[0],arr[1],arr[2]));
    //but can open it also
    console.log(sum(...arr));
    // in case we have declare at the bottom and given vale at the bottom
    var a1=6
})()