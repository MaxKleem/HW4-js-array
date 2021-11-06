# HW4-js-array
Создайте на вашем github репозиторий с именем HW4-js-array. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
Создайте index.html с базовой разметкой в котором подключите js script с домашним заданием или используйте тег script в котором реализуете домашнее задание.
В README.md добавить описание с заданием
Перед каждым выполненным заданием разместите 
console.log('------------- # номер выполненного пункта')
Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { console.log("Вы согласились."); }, // нужно обновить данное место
  function() { console.log("Вы отменили выполнение."); } // нужно обновить данное место
);
Напишите код который преобразует строку 'my-short-string' в массив значений ['my', 'short', 'string'].
Напишите код который преобразует массив ['JavaScript', 2015] в строку вида 'JavaScript 2015'.
Отфильтровать всех пользователей которые старше 20 лет. Дан массив данных:
let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
Должны получить следующий результат: [{id: 3, name: "Jon", age: 5}].
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = /* ... ваш код */
console.log( names ); // [Vic, Petya, Jon]
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log( arr ); // [3, 1]
Написать функцию которая будет преобразовывать строку в массив. Первый аргумент функции должен принимать строку, второй аргумент функции должен принимать разделитель (сепаратор).  Функция должна возвращать полученный массив.
Напишите функцию slArray(arr, startIndex, endIndex), которая принимает массив arr,  и возвращает новый массив, в который должна скопировать значения в рендже с  startIndex, endIndex.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let range = slArray(arr, 1, 4);
console.log( range ); // 3, 8, 1 
console.log( arr ); // 5,3,8,1 (без изменений)
Напишите функцию суммирования sum, которая принимает аргументы с помощью spread operator. Функция sum должна возвращать результат суммирования всех значений которые передаются в функцию.



