for(let i=0;i<=10;i++){
    console.log(i);
}

let obj = {
    name:"Chaitanya",
    role:"porgramer",
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
    
}


for (const element of "Chaitanya") {
    console.log(element)
}

// while loop 

let i=5;

while(i<=5){
    console.log(i);
    i++;
}

// do while loop
let a=10;
do{
    console.log(a);
}
while(a<5)