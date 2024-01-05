class Person{
    constructor(firstName,lastName,age,address,contact,language){
        this.firstName = firstName;
        this.lastName=lastName;
        this.age= age;
        this.address = address;
        this.contact = contact;
        this.language = language;
        }
    getInfo(){
        console.log(`The person name is ${this.firstName,this.lastName}`);
        console.log(`His age is ${this.age}`);
        console.log(`His address is ${this.address} and contact ${this.contact}.He knows ${this.tamil} to speak`);
        
    }

    }

var obj1 = new Person("Jhon","Kenny",26,"chennai",1234567890,"Tamil");
console.log(obj1);
console.log(obj1.getInfo());
