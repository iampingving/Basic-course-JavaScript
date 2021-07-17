function celsiusToFahrenheit() {
    var tCelsius;
    tCelsius = parseFloat(prompt("Введите температуру в градусах Цельсия"));
    if (tCelsius || !isNaN(tCelsius))
        alert("Температура по Цельсию: " + tCelsius + "\nТемпература по Фаренгейту: " + (tCelsius * 9 / 5 + 32).toFixed(2));
    else
        alert("Вы отменили действие или ввели пустую строку");
}

function variableTest() {
    var admin;
    var name;
    alert("Текущее значение admin: " + admin + "\nТекущее значение name: " + name);
    name = prompt("Введите значение name");
    if (name) {
        admin = name;
        alert("Вы ввели name: " + name + "\nЗначение admin после копирования: " + admin);
    } else
        alert("Вы отменили действие или ввели пустую строку");
}

function numberPlusString() {
    alert("1000 + \"108\" = " + (1000 + "108"));
}
/**проверяет, являются ли аргументы числом */
function check(a, b) {
    if (isNaN(a) || isNaN(b)) return false;
    else return true;
}

function countTwoNumbers() {
    let a = parseInt(prompt("Введите a"));
    let b = parseInt(prompt("Введите b"));
    if (check(a, b)) {
        if (a >= 0 && b >= 0) {
            alert("a = " + a + "; b = " + b + "; a - b =" + (a - b));
        } else if (a < 0 && b < 0) {
            alert("a = " + a + "; b = " + b + "; a * b =" + (a * b));
        } else if (Math.sign(a) != Math.sign(b)) {
            alert("a = " + a + "; b = " + b + "; a + b =" + (a + b));
        }
    } else alert("Вы отменили действие или ввели не число");
}

function outputRangeOfNumbers() {
    let a = parseInt(prompt("Введите a"));
    let outputRange = "";
    switch (a) {
        case 0:
            outputRange += a++ + " ";
        case 1:
            outputRange += a++ + " ";
        case 2:
            outputRange += a++ + " ";
        case 3:
            outputRange += a++ + " ";
        case 4:
            outputRange += a++ + " ";
        case 5:
            outputRange += a++ + " ";
        case 6:
            outputRange += a++ + " ";
        case 7:
            outputRange += a++ + " ";
        case 8:
            outputRange += a++ + " ";
        case 9:
            outputRange += a++ + " ";
        case 10:
            outputRange += a++ + " ";
        case 11:
            outputRange += a++ + " ";
        case 12:
            outputRange += a++ + " ";
        case 13:
            outputRange += a++ + " ";
        case 14:
            outputRange += a++ + " ";
        case 15:
            outputRange += a;
            alert(outputRange);
            break;
        default:
            alert("Вы отменили действие, или ввели число меньше 0, или ввели не число");
    }
}

function addition(arg1, arg2) {
    return arg1 + arg2;
}

function subtraction(arg1, arg2) {
    return arg1 - arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        default:
            return "Операция не определена";
    }
}

function easyCalc() {
    let str = prompt("Введите строку в формате: \"число\" \"число\" \"операция\"\nВводить через пробел\nДоступные операции: + - / *").split(" ");
    if (check(str[0], str[1]))
        alert(mathOperation(parseInt(str[0]), parseInt(str[1]), str[2]));
    else alert("Один из аргументов не число");
}

function toThePower() {
    let str = prompt("Введите строку в формате: \"число\" \"степень\"\nВводить через пробел\n").split(" ");
    if (check(str[0], str[1]))
        alert(power(parseInt(str[0]), parseInt(str[1])));
    else alert("Один из аргументов не число");
}

function power(val, pow) {
    if (pow === 1) return val;
    else return val * power(val, --pow);
}

function outputSimpleNumbers() {
    let number = 0,
        isSimple = true,
        strOut = '';
    while (number != 101) {
        if (number > 1) //потому что 0 и 1 не являются простыми числами
        {
            for (let i = 2; i < number; i++)
                if (number % i === 0)
                    isSimple = false;
            if (isSimple)
                strOut += number + ' ';
            isSimple = true;
        }
        number++;
    }
    alert(strOut);
}

function goodsInBasket() {
    let basket = [
        ['Футболка', 6, 999],
        ['Шорты', 2, 1199],
        ['Юбка', 2, 1599],
        ['Носки', 5, 149],
        ['Джинсы', 2, 2199]
    ]
    alert("В корзине:\nТовар,Кол-во,Цена\n" + basket[0] + "\n" + basket[1] + "\n" + basket[2] + "\n" + basket[3] + "\n" + basket[4] + "\n" + "\nИтого: " + countBasketPrice(basket));
}

function countBasketPrice(basket) {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
        sum += basket[i][1] * basket[i][2];
    }
    return sum;
}

function outputNumber() {
    for (let i = 0, str = ''; i <= 9; str += i + ' ', i++, i == 10 ? alert(str) : true) {}
    //не совсем понятно из формулировки задания, поэтому вариант 2
    for (let i = 0; i <= 9; console.log(i), i++) {}
}

function pyramid() {
    let strOut = '';
    for (let i = 0; i < 20; i++) {
        strOut += 'x';
        console.log(strOut);
    }
    //не совсем понятно из формулировки задания, поэтому вариант 2
    strOut = 'x';
    for (let i = 1; i < 20; i++)
        strOut += "\n" + strOut.slice(-i) + 'x';
    console.log(strOut);
}