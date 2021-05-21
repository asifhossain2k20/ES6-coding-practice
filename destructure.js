//destructure

const information={
    name: 'alif',
    address:'Rangpur',
    number:017267394949
}

const{address}=information;
console.log(address);

//Array Distructure

const friends=['alif','akash','joy','Roy'];
const [a,b,...c]=friends;
console.log(a,b);
console.log(c);

//nested obj

const student={
    name:'Alif',
    info:{
        address:'Nurpur',
        number: 017827383
    }
}

const {number}=student.info;

console.log(number);