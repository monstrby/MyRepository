// index.js
require('./app/index')

var Kleshi = {
    boss: 'Язэп',
    likeaboss: 'Доцэнт',
    avtoremont1: 'Толян',
    avtoremont2: 'Проф',
    bandit: 'Матус',
    driver: 'Олег',
    ufohunter: 'Стасямба'

};

console.log(
    'Иерархия клешанской мафии с помощью JavaScript');
console.log('Клешанский Босс - ' + Kleshi.boss);
console.log('Правая рука босса - ' + Kleshi.likeaboss);
console.log('Глава клана авторемонтников - ' + Kleshi.avtoremont1);
console.log('Хранитель компрессора клана - ' + Kleshi.avtoremont2);
console.log('Главный по контрабанде и залетам - ' + Kleshi.bandit);
console.log('Водитель со всеми категориями - ' + Kleshi.driver);
console.log('Ответственный за контакты с инопланетянами - ' + Kleshi.ufohunter);


function WhereisKleshi() {
    if (Kleshi) {
        console.log('Есть такая веска Клеши');
    } else {
        console.log('Клеши згинули во тьме :(');
        
    }
};

WhereisKleshi();

function showKleshiSize() {
    var width = 5;
    var height = 15;
    return 'Площадь Клешей: ' + (width * height);
}

var msg = showKleshiSize();
console.log(msg);

/* Генератор случайного числа от 0 до 10 */
var randomNum = Math.floor((Math.random() * 10) + 1);
console.log(randomNum);
/* Выводим текущую дату и придаем ей понятный для человека формат */
var today = new Date();
var simleDate = today.toTimeString();
console.log(simleDate);



