//1-- Нужно ввести число и на полученное число вернуть день недели. */
/*let number = Number(prompt("Enter a number of the week: "));
switch (number){
    case 1:
         console.log("Monday");
         break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6:
        consosle.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default: 
        console.log("Mistake");
};
 



//2-- Четное и нечетное - Нужно ввести число и как результат вывести четное это число или нет.
/*const number = prompt("Enter a number: "); //to create promt table for writing 

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd."); 
}



//3-- Какое число больше
Нужно вывести окно, на каждую отдельно. Ввести два числа. В ответ вывести сообщение о том какое из них больше.*/
/*
var first = Number(prompt('Enter first number')); 
var second = Number(prompt('Enter second number'));

if (first == second ){
 alert(first + " is equal to " + second);
}
else if (first > second) {
   alert(first + " is higher than " + second);
} else {
    alert(first + " is lower than " + second);
}


//4-- Количество элементов двух массивов-Нужно создать 2 массива. Массивы должны хранить однотипные данные. Далее нужно их объединить в один и вывести количество всех элементов.*/

/*
let items1 = ["Espresso", "Flat White", "Affogato", "V60 Coffee", "Turkish Coffee" ];
let items2 = ["Ice Americano", "Latte", "Chemex", "Double Espresso", "Lungo"];
let totalitems = items1 .concat(items2);
console.log(totalitems);
console.log(totalitems.length);
alert (totalitems);
*/



//5-- Сумма элементов массива-Нужно создать массив с числами. Далее нужно сложить все элементы и вывести их сумму*/
/*const arrays = [4, 6, 4, 20, 2, 9, 4, 13, 14];
let sumNumbers = 0;
for (let i = 0; i < arrays.length; i++) {
   sumNumbers += arrays[i];
}
console.log(sumNumbers);  


//6-- Написать функцию, которая с помощью prompt спрашивает у пользователя число от 1 до 10. */
/*
function RandomNumber() {
    let AppleNumber = Math.floor(Math.random() * 6 + 1);
    let yourNumber = Number(prompt('Heeeey there, Guess a secret number ;)'));
    if (yourNumber === AppleNumber) {
       console.log('Yaaaaay,You have guessed it right!');
    }
    else {
       console.log('Sorry Bro, You lost');
    }
 }
 RandomNumber();

//7-- Функция, которая принимает число до 1000 и возвращает массив из делителей этого числа. */
 
/*
 function getNumber() {
    userNumber = Number(prompt('Enter number between 0 to 1000'));
    const divisors = [];
    for (let i = 2; i <= userNumber / 2; i++) {
      if (!(userNumber % i)) {
        divisors.push(i);
      }
    }
  
    alert(`Divisors of number ${userNumber}: 1, ${divisors}`);
  }
  getNumber();
  
//8-- Функция, которая возвращает число, которые мы отправили, только в кубе */
/*
  const Cube = function (userNumber) {
    return Math.pow(userNumber, 3);
  };
  alert(
    `Number in cube equals ${Cube( Number(prompt("Calculate Cube")))}`);
  
//9-- Функция, которая возвращает факториал числа. */
/*
function FactorialNumber(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
       factorial *= i;
    }
return factorial;
 }
 alert(
    `Factorial of your number equals: ${FactorialNumber(Number(prompt("Calculate Factorial Number")))}`
  );
  
//10-- Функция, которая принимает число и возвращает ответ, сложное оно или простое */
/*
function Prime(number) {
    for (var i = 2; i <= number; i++) {
      if (number % i === 0) return alert(`${number}  oh no! it is  a composite number :S`);
      else return alert(`${number}  oh thanks God! it is a prime number! :D`);
    }
  }
  Prime(Number(prompt("Enter any number you want!")));
  
//11-- Повторяющийся элемент: Нужно создать массив с разными элементами. Некоторые элементы должны повторятся. Нужно удалить из массива повторяющийся элемент. */
/*
const arrays = ['Jaguar', 'Bentley', 'Mini Cooper', 'Bentley', 'Audi', 'Aston Martin', 'Mini Cooper'];

for (let i = 0; i < arrays.length; i++) {
   for (let a = i + 1; a < arrays.length; a++) {
      if (arrays[i] === arrays[a]) {
         arrays.splice(a, 1);
      }
   }
}
console.log(arrays);

alert(`${arrays}`);

//12-- Дополнительное задание: Выполнить сортировку массива методом пузырком */
/*
let arr = [13, 4, 6, 14, 20, 29, 16];

for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr.length - 1; a++) {
        if (arr[a] > arr[a + 1]) {
            let b = arr[a];
            arr[a] = arr[a + 1];
            arr[a + 1] = b;
        }
    }
}

 alert(`Bubbles sort ${arr}`);

 */


