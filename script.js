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