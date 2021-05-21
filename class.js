//class is collection of objects

class Student{
    constructor(sID,sName){
        this.id=sID;
        this.name=sName;
        this.school="X school"
    }
}

const student1=new Student(1,'Alif');
const student2=new Student(2,'Asif');
console.log(student1,student2);
