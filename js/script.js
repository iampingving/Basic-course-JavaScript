"use strict"

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

function getObject(num) {
    if (num > 999 || num < 0) {
        console.log("Неверный формат числа");
        return {}
    } else
        return {
            ones: num % 10,
            tens: ((num % 100) - (num % 100 % 10)) / 10,
            hundreds: (num - (num % 100)) / 100
        }
}

function divideNumber() {
    let a = parseInt(prompt("Введите положительное число меньше 1000"));
    let obj = getObject(a);
    console.log(obj);
}

function goodsInBasketObj() {
    const basket = {
        items: [{
                id: 1,
                name: "Футболка",
                amount: 6,
                price: 999
            },
            {
                id: 2,
                name: "Шорты",
                amount: 2,
                price: 1199
            },
            {
                id: 3,
                name: "Юбка",
                amount: 2,
                price: 1599
            }, {
                id: 4,
                name: "Носки",
                amount: 5,
                price: 149
            }, {
                id: 5,
                name: "Джинсы",
                amount: 2,
                price: 2199
            }
        ],

        countSum() {
            let summ = 0;
            for (let item in this.items) {
                summ += this.items[item].amount * this.items[item].price;
            }
            return summ;
        }
    }

    alert(basket.countSum());
}

function createChessboard() {
    let mainField = document.querySelector('#block-dom');
    mainField.innerHTML = '';
    let chessBoard = document.createElement('div');
    let arrLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    chessBoard.style.display = 'grid';
    chessBoard.style.width = 'fit-content';
    chessBoard.style.border = '1px solid #0951d6';
    chessBoard.style.gridTemplateColumns = '20px repeat(8, 50px) 20px';
    chessBoard.style.gridTemplateRows = '20px repeat(8, 50px) 20px';

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            let border = document.createElement('div');
            border.style.width = '100%';
            border.style.display = 'flex';
            border.style.justifyContent = 'center';
            border.style.alignItems = 'center';

            let cell = document.createElement('div');
            cell.style.width = '100%';
            cell.style.outline = '1px solid #0951d6'

            if (i === 0) {
                border.style.transform = 'rotate(180deg)';
                if (j != 0 && j != 9)
                    border.innerText = arrLetter[j - 1]
                chessBoard.appendChild(border);
            } else if (i === 9) {
                if (j != 0 && j != 9)
                    border.innerText = arrLetter[j - 1]
                chessBoard.appendChild(border);
            } else {
                if (j == 0 || j == 9) {
                    border.innerText = i;
                    if (j == 9) {
                        border.style.transform = 'rotate(180deg)';
                    }
                    chessBoard.appendChild(border);
                } else {
                    if (i % 2 === j % 2) {
                        cell.style.backgroundColor = '#0951d6';
                    } else {
                        cell.style.backgroundColor = 'white';
                    }
                    chessBoard.appendChild(cell);
                }
            }
        }
    }
    mainField.appendChild(chessBoard);
}

function goodInBasketDOM() {
    const basket = {
        items: [{
                id: 1,
                name: "Футболка",
                amount: 6,
                price: 999
            },
            {
                id: 2,
                name: "Шорты",
                amount: 2,
                price: 1199
            },
            {
                id: 3,
                name: "Юбка",
                amount: 2,
                price: 1599
            }, {
                id: 4,
                name: "Носки",
                amount: 5,
                price: 149
            }, {
                id: 5,
                name: "Джинсы",
                amount: 2,
                price: 2199
            }
        ],

        countSum() {
            let summ = 0;
            for (let item in this.items) {
                summ += this.items[item].amount * this.items[item].price;
            }
            return summ;
        }
    }
    let mainField = document.querySelector('#block-dom');
    mainField.innerHTML = '';
    
    let itemWrap = document.createElement('div');
    itemWrap.style.display="flex";
    itemWrap.style.flexDirection="row";
    itemWrap.style.justifyContent="safe space-around";
    itemWrap.style.flexWrap="wrap";
    itemWrap.style.width="100%";
    
    if (basket.items.length > 0) {
        for (let item in basket.items) {
            let itemCard=document.createElement('div');          

            itemCard.style.display="flex";
            itemCard.style.flexDirection="column"
            itemCard.style.justifyContent = 'center';
            itemCard.style.alignItems = 'left';
            itemCard.style.border='3px solid #0951d6';
            itemCard.style.padding='20px';
            itemCard.style.margin='5px';
            itemCard.style.width="30%"
            let itemName = document.createElement('span');
            itemName.innerText=basket.items[item].name;
            let itemID = document.createElement('span');
            itemID.innerText="Артикул: "+ basket.items[item].id;
            let itemAmount = document.createElement('span');
            itemAmount.innerText="Кол-во: "+ basket.items[item].amount;
            let itemPriceOne = document.createElement('span');
            itemPriceOne.innerText="Цена (за 1 ед.): "+ basket.items[item].price;
            let itemPrice = document.createElement('span');
            itemPrice.innerText="Всего на: "+ basket.items[item].amount*basket.items[item].price;

            
            itemCard.appendChild(itemName);
            itemCard.appendChild(itemID);
            itemCard.appendChild(itemAmount);
            itemCard.appendChild(itemPriceOne);
            itemCard.appendChild(itemPrice);


            itemWrap.appendChild(itemCard);
        }
        mainField.appendChild(itemWrap);
        let sumPrice = document.createElement('span');
        sumPrice.innerText="В корзине " + basket.items.length + " товаров на сумму " + basket.countSum() + " рублей.";
        mainField.appendChild(sumPrice);
        //mainField.innerText += "В корзине " + basket.items.length + " товаров на сумму " + basket.countSum() + " рублей.";
    } else {
        mainField.innerText = "Корзина пуста";
    }
}