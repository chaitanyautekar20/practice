class User{
    constructor(name){
        // invokes the setter
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.lengh <4){
            console.log('Name Is to short');
            return ;
        }
        this._name=value;
    }
}

let user = new User("Ram");
console.log(user.name);// Ram
// user = new User("");
user.name ="ab" //name is two short
console.log(user.name);

