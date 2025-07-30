// when we make the async funtion it runs in the background 
// without stoping  the execution
// async function getdata(){
//     //stumilates that data is comming from the serever
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

// console.log("loging module")
// console.log('Do something');


// console.log('data is loding');

// let data =getdata()
// if we want to wait then we can use .then
// data.then((v)=>{
//     console.log(data)

// console.log("processing the data")})
// but this throug the promise
// we can do it with await


// await can be used in the async only
// than why we have to make the async funtion main



//setell means resolve or reject
//resolve means promise has resolved succesfully
//reject means promise has not resolved succesafully
async function getdata() {
    //stumilates that data is comming from the serever
    // we will take the dummy api
    // we are usig json placeholder
    //we will featch this which will return the promise
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')// wat till the data is processing
    //   .then(response => response.json())
    //   .then(json => console.log(json)) //this require two then becauseb it respose the two promise which is required for the parsing
    // let data = await x.json() // takes time for parsing in the json
    // console.log(x)
    // console.log(data)
    // return data;



    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

async function main() {
    console.log("module is loding")
    let data = await getdata()
    console.log(data);
    console.log('Process data');


}


main()






