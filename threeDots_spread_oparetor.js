//array concat by spread operator

const array1=[10,20,30];
const array2=[40,50,60];

const addAll=[...array1,5,...array2];
console.log(addAll);


//find maximum in array

const arrTaka=[33,444,2345,999];

const maximum=Math.max(...arrTaka);
console.log(maximum);