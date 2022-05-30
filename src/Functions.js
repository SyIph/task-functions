/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    return function (cur) {
        return cur > num;
    };
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    return function (cur) {
        return cur.indexOf(substr) !== -1;
    };
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    var a = num;
    return function (num2) {
        return a * num2;
    };
}
