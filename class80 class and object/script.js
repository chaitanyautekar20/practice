// let obj={
//     a:1,
//     b:"Harry"
// }

// console.log(obj);

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__= animal; //sets rabbit.[[prototype]]=animal
// means what we are setting for the animal can be utulised by the rabbit also
// ptototype is nothing but adding the propery inside the object

class animal {
    constructor(name) {
        this.name = name
        console.log("This is the animal class")
    }
    eats() {
        console.log('Kha raha hai');
    }
    jumps() {
        console.log('Kuda raha hai');

    }
}

let a = new animal("Bunny");
console.log(a);

// Inheretance 
class lion extends animal {
    constructor(name) {
        super(name)
        console.log('This is the lion ');
    }
    //method overriding
    eats() {
        //If we wamd to call the super class method then 
        super.eats()
        console.log('Kha raha hai roor');
    }
}
let l = new lion("Shera")
console.log(l);
