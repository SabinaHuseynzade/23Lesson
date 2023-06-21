//1)
//что выведет в консоли функция call
const person1 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

//Alex = 24


//2)
//получите доступ к методу call и запустите его
const person2 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

person2.call()

//3)
//выведите в консоли все ключи из обьекта с помощью for
const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for(let i in person3){
    console.log(i);
}

//4)
//выведите в консоли все значения из обьекта с помощью for
const person4 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for(let i in person4){
    console.log(person4[i]);
}

//5)
//преобразуйте обьект ниже в массив
const person5 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

const Arr = Object.values(person5);

//6)
//преобразуйте обьект ниже в строку
const person6 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

let str = JSON.stringify(person6)

//7)
//преобразуйте обьект ниже в конструктор функции
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

function Object(name, age, isMarried, hasCar, hasJob, job, childs, awards) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.hasCar = hasCar;
    this.hasJob = hasJob;
    this.job = job;
    this.childs = childs;
    this.awards = awards;
}

let obj2 = new Object('Alex', 24, false, false, true, 'Programmer', ['Hanz', 'Marry'], {itMaster: 'Legend rang', driver: 'Fast man'});




//8)
//перечисли встроенные конструкторы javascript

// new String()
// new Number()
// new Boolean()
// new Object()
// new Array()
// new Function()
// new Date()
// new RegExp()

//9)
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
let person = new Person("Veli", 21, "frontend");


//sum

function addNums(str){
    let num = str.split(",");
    let summ = 0;
    for(let i = 0; i < num.length; i++){
        summ += +num[i] 
    };
    return summ;
}

console.log(addNums("2, 5, 1, 8, 4")); 

//sufPref

function isPrefix(word, prefix){

    const pref = prefix.replace(/[\-/]/g, '')

    if(word.startsWith(pref)){
        return true
    }else{
        return false
    }
}

function isSuffix(word, suffix){
    const suff = suffix.replace(/[\-/]/g, '')
    if(word.endsWith(suff) ){
        return true
    }else{
        return false
    }
}
console.log(isPrefix("автоматизация", "авто-"));
console.log(isSuffix("арахнофобия", "-фобия") );
console.log(isPrefix("ретроспектива", "суб-") );
console.log(isSuffix("призвание", "-логия") );

//arr

function toArray(obj){
    let keys = Object.keys(obj)
    let arrayOne = [];

for(let i = 0; i < keys.length; i++){
    let arrFr = `${keys[i]}${obj[keys[i]]}`
    let arrInto = Array.from(arrFr)
    arrayOne.push(arrInto)
    
    
}


    return arrayOne;
}
    

console.log(toArray({a: 1, b: 2}));


//concat

function concat(arr){
    let arr = [];
    for (let i = 0; i <= arras.length; i++) {
      arr = arr.concat(arras[i]);
    }

    return arr
      
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));


// //count

function count(num) {
    let strNum = Math.abs(num).toString(); 
    
    return strNum.length; 
}

console.log(count(318));
console.log(count(-92563)); 
 