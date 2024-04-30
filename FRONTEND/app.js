
// function PersonMaker(name,age){

//     const person = {
//         name: name,
//         age : age,
//         talk(){
//             console.log(`my name is ${this.name}`);
//         },
//     };
//     return person;
// }


class Person{
    constructor(name,age){
        console.log("person class constuctor");
        this.name = name;
        this.age = age;
    }
        talk(){
            console.log(`hi my name is ${this.name}`);
        }
}
class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name, age); //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name,age,subject){
        console.log("teacher class consturctor");
        super(name,age); //parent class construtor is being called
        this.subject = subject;
    }
}

let stu1 = new Student("ankit",20,"43");

