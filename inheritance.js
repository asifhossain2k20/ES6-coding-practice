//inheritance
class Parent{
    constructor(){
        this.fatherName="Hossain";
    }

}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
        
    }
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}

const person=new  Child('alif');
console.log(person);
const fullName=new Child('XXX');
console.log(fullName.getFullName());