let a = prompt("Enter the first num")
let b = prompt("Enter the second num")
// can see various error of js from mdn
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed");
}

let sum =parseInt(a)+parseInt(b)
// console.log('The sum is ', sum);


// some times we need to handle the error but instead of just throwing it

// try {
//     console.log("The x into sum is",sum*x)
// } catch (error) {
//     console.log('erro has came');
    
// }

function main(){
 try {
    console.log("The x into sum is",sum*x)
} catch (error) {
    console.log('erro has came');
    
}finally{
    console.log('files are being closed and db conection has been closed');
}   
}

let c= main()