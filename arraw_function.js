//single line no parameter function

const addNumber=()=>10+10;
const result1=addNumber();
console.log(result1);


//single line one parameter function

const addNumber2=(num)=>num+num;
const result2=addNumber2(5);
console.log(result2);


//single line more than one parameter function

const addNumber3=(a,b)=>a+b;
const result3=addNumber3(10,30);
console.log(result3);


//multiple line function

const calculation=(a,b)=>{
    const add = a+b;
    const sub=a-b;
    const result=add*sub;
    return result;
}

const math=calculation(20,10);
console.log(math);
