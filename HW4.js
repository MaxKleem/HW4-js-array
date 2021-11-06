console.log('--------------------- # 4')

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};
ask(
    "Вы согласны?",
    () => { console.log("Вы согласились."); },
    () => { console.log("Вы отменили выполнение."); }
);

console.log('--------------------- # 5')
let string = 'my-short-string';
let arr = string.split('-');
console.log('Массив значений из строки = ', arr);

console.log('--------------------- # 6')
let arr2 = ['JavaScript', 2015];
console.log('Массив в строку = ', arr2.join(' '));

console.log('--------------------- # 7');
let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
let user = users.find((item) => item.age < 20);
console.log('Пользователь с возрастом меньше 20 лет = ', user)// [{id: 3, name: "Jon", age: 5}]

console.log('--------------------- # 8');
let users2 = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
let names2 = users2.map(item => item.name);
console.log('Имена с масива = ', names2); // [Vic, Petya, Jon]

console.log('--------------------- # 9');
let arr9 =  [5, 3, 8, 1];
function filterRangeInPlace(arr9, a, b) {
    for (let i = 0; i < arr9.length; i++) {
        let val = arr9[i]
        if (a <= val && val <= b) {
            i--;
            arr9.splice(i, 1);
        };
    };
};
filterRangeInPlace(arr9, 1, 4);
console.log('Значения между а и b = ', arr9 ); // [3, 1]

let arr91 =  [5, 3, 8, 1]
function filterRangeInPlace1(arr91, a, b){
    var c = arr91.filter(function(item){
        if (item >= a && item <= b){
            return true;
        }
    })
    console.log('2 Вариант Значения между а и b = ', c);
}
filterRangeInPlace1(arr91, 1, 4);


console.log('--------------------- # 10');
let str10 = 'my-short-string';
let s = '-';
function separet(str10, s) {
    let res = str10.split(s);
    return res;
};
console.log('Array = ', separet(str10, s));


console.log('--------------------- # 11');
let str = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек"
console.log(interpreterToArr(str,","))

function interpreterToArr(str,separator) {
    return str.split(separator);
}

console.log('--------------------- # 12')

let arr4 = [5, 3, 8, 1];
let range = slArray(arr4, 1, 4);
console.log(range);
console.log(arr4)


function slArray(arr, startIndex, endIndex) {
    return arr.slice(startIndex,endIndex);
}

console.log('--------------------- # 13')

function sumAll(...args) {
    let sum = 0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}
console.log(sumAll(1,2,3))