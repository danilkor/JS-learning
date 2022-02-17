//ВАЖНЫЕ ЗАМЕТКИ:
//Для конструкции ${переменная и т.п.} необходимы вместо обычных ковычек ковычки на букву ё. ````;
//
//
// 



function pow2(p, x) {

    //document.getElementById('inp1').value; - взять значение элемента
    p = document.getElementById('inp1');
    x = p.value;
    x = parseInt(x);

    console.log(`${parseInt(p.value)}^2 = ${x * x}`);
    result = x * x;

    //document.getelementId('id') -берёт информацию об элементе.
    //innerHTML устанавливает текст В теге. можно использвать +=; если вписать <тег> он выполнится а не отобразится
    //innerText если вписать <тег> он отобразится но не выполнится
    //outerHTML устанавливает текст вместо
    // p.insertAdjacentHTML('где будет(beforeBegin afterBegin beforeEnd afterEnd)','что написать') добавляет но НЕ ЗАМЕНЯЕТ текст!
    document.getElementById('result').innerHTML = result;
}

function genrand() {

    // Math.floor((Math.random() * 10) + 1) генерирует рандомное число от 1 до 10
    //Math.random() генерирует число от 0 до одного (например 0.172562).
    //* 10 и получаем 1.72562
    //+ 1 и получаем 2.72562; Это нужно для того, чтобы не получить 0 или получить 10. Это связано с функцией 
    //Math.floor() - она округляет всегда в МЕНЬШУЮ сторону.

    //если умножение на 10 заменить умножением на 100 будут числа от 1 до 100. так можно получить больше чисел.
    result = Math.floor((Math.random() * 100) + 1);

    console.log(`random number is ${result}` );
    document.getElementById('result2').innerHTML = result;
}

function repeatedAction() {

    document.getElementById('result3').innerHTML = "";

    // for (var i = 0; i < 100; i++) {} выполняет действие 100 раз. 
    for (let i = 0; i < parseInt(document.getElementById('repeatTimes').value); i++) {
        document.getElementById('result3').innerHTML += i + 1 + " ";
        console.log(i);
    }
}

function repeatedActionW(p,i) {

    p = document.getElementById('result4');
    p.innerHTML = "";

    i =  1;
    //while выполняется пока условие верно. Сначала идёт проверка условия.
    while(i <= parseInt(document.getElementById('repeatTimesW').value)) {
        p.innerHTML += i + " ";
        i++ ;
    }

    //do {} while();сначала делает потом проверяет условие.
}

let counterForActionForTimer = 1;
let timerForActionForTimer;

//Запускаем функцию, если счётик меньше или равен введённому числу запускаем таймер на 0.5 сек. выполнится функция которая увеличит
//счётик на 1 и выведет его на экран. после этого clearTimeout остановит таймер и всё пойдёт по кругу.Рекурсия
function repeatedActionTimer() {
    p = document.getElementById('repeatTimesTimer').value;
    if(counterForActionForTimer == 1) {
        document.getElementById('result5').innerHTML = "";
    }
    if(counterForActionForTimer <= p) {
        timerForActionForTimer = setTimeout(function(){
            p = document.getElementById('result5');
            p.innerHTML = counterForActionForTimer++ + " ";
            clearTimeout(timerForActionForTimer);
            repeatedActionTimer('repeatTimesTimer')
        }, 500);
    } else {
        counterForActionForTimer = 1;
    }
    
}


//МАССИВЫ
    
    var m =[];
    //объявление массива - var m = []
    // в массиве можно оддновременно хранить разные типы данных
    //m[0] = 99, m[1] = 33, m[2] = 'Hello'


function  massive1Out(outIdFromHTML) { //эта фунцция выводит элементы массива в указанное в атрибуте место
    let str = "<br>"
    let p = document.getElementById(outIdFromHTML);

    //m.length - длина массива
    //записывает  в переменную str всё что будет выводится на экран
    for(i = 0; i < m.length; i++) {
        str += i + " --- " + m[i] + "<br>";
    }
    p.innerHTML = str;
}

function massive1In(inIdFromHTML) {
    let i1 = document.getElementById(inIdFromHTML).value;

    //push добавляет в конец массива элемент
    m.push(i1);
    massive1Out('result6');
}

function massive1ClearAll() {
    m.length = 0;
    massive1Out('result6');
}

function massive1Pop() {
    m.pop();
    massive1Out('result6');
}

//slider 1
var left1 = 0; 
function slider1Left() {
    var polosa1 = document.getElementById('polosa1');
    left1 = left1 - 128;
    if (left1 < -512) {
        left1 = 0;
    }

    //сдвигает всё на left px путём изменения CSS кода
    polosa1.style.left = left1 + "px";
}

function slider1Right() {
    var polosa1 = document.getElementById('polosa1');
    left1 = left1 + 128;
    if (left1 > 0) {
        left1 = -512;
    }

    //сдвигает всё на left px путём изменения CSS кода
    polosa1.style.left = left1 + "px";
}

//CSS generator
//После изменения range input мы ввыполняем функцию cssGenerator()
document.getElementById('cssGeneratorInBR').oninput = cssGenerator;
document.getElementById('cssGeneratorInWidth').oninput = cssGenerator;
document.getElementById('cssGeneratorInHeight').oninput = cssGenerator;
document.getElementById('cssGeneratorInBorderWidth').oninput = cssGenerator;


// Выполняем функцию для записи начальных свойств в textArea
cssGenerator()
function cssGenerator() {

    //фигура
    var div = document.getElementById('cssGeneratorVisible');

    //меняем свойства
    div.style.borderRadius = document.getElementById('cssGeneratorInBR').value + "%";
    div.style.height = document.getElementById('cssGeneratorInHeight').value + "px";
    div.style.width = document.getElementById('cssGeneratorInWidth').value + "px";
    div.style.borderWidth = document.getElementById('cssGeneratorInBorderWidth').value + "px";

    //генерируем код
    document.getElementById('cssGenOut').innerHTML = 
    `border-radius: ${document.getElementById('cssGeneratorInBR').value}%;
height: ${document.getElementById('cssGeneratorInHeight').value}px;
width: ${document.getElementById('cssGeneratorInWidth').value}px;
border-width: ${document.getElementById('cssGeneratorInBorderWidth').value}px;`
}

//this
var spanFromHTML = document.getElementsByTagName('span');
console.log(spanFromHTML);
for(let i = 0; i < spanFromHTML.length; i++) {
    spanFromHTML[i].onclick = spanFunc;
}

function spanFunc() {
    console.log(this.innerHTML)
    p = this;
    // p.style.color = 'red';
    // p.style.fontWeight = 'bold'
    setTimeout(function () {
        // p.style.color = 'black';
        // p.style.fontWeight = 'normal';
        clearTimeout()
        console.log('abrakadabra');
    }, 800)
}

//Radi Buttons
function radioButtonSubmit() {
    var m = document.getElementsByName('yesNo');
    console.log(m);
    for(let i = 0; i < m.length; i++) {
        if(m[i].checked){

            //Ветвление switch case.
            switch (m[i].value){
                case "yes":
                    str = "нет";
                    console.log(str);
                    alert(str);
                    break;
                case "no":
                    str = "да";
                    console.log(str);
                    alert(str);
                    break;       
            }
        }
    }
}


//Ассоциативный массив
//   // // var m=[4, 12, 'hello'];
//   // console.log( m )

    //Объявление ассоциативного массива
//   var m = {};
//   var n = {
//  	"one" : 12,
//   	"hello" : "world",
//   	"prim" : 2000,
//   	"double key": 777
//   };

    //Обращение к нему
//   n.one = 9000;
//   // console.log(n['prim']);
//   // console.log(n.one);
//   // console.log (n.double key); //ошибка
//   console.log( n['double key'] );
//   var ppp = 'hello';
//   // n.ppp //ошибке
//   console.log(n[ppp]);

    
//   var out = document.getElementById('out');
    //for(var key in n) обращается к каждому элементу массива n. 
//   for (var key in n){
//   	out.innerHTML += key +' ---- '+n[key]+ '<br> ';
//  }

//Мини магазин
function bbc() {
    var goods = {
        "00001": {
            "name": "Огурец",
            "cost": 20,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/16-cucumber-128.png",
            "inStock": "Есть на складе"
        },
        "00002": {
            "name": "Помидор",
            "cost": 30,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/12-tomato-128.png",
            "inStock": "Ожидается поставка"
        },
        "00003": {
            "name": "Банан",
            "cost": 40,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png",
            "inStock": "Больше не продаётся"
        },
        "00004": {
            "name": "Яблоко",
            "cost": 10,
            "img": "https://media.istockphoto.com/vectors/watercolor-red-apples-vector-id1183700913?b=1&k=20&m=1183700913&s=170x170&h=Hey0vHg4Hvc_wNScloeRFL_SEqbi9MCahsZqet_UBx0=",
            "inStock": "Есть на складе"
        },
        "00005": {
            "name": "Огурец",
            "cost": 20,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/16-cucumber-128.png",
            "inStock": "Есть на складе"
        },
        "00006": {
            "name": "Помидор",
            "cost": 30,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/12-tomato-128.png",
            "inStock": "Ожидается поставка"
        },
        "00007": {
            "name": "Банан",
            "cost": 40,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png",
            "inStock": "Больше не продаётся"
        },
        "00008": {
            "name": "Яблоко",
            "cost": 10,
            "img": "https://media.istockphoto.com/vectors/watercolor-red-apples-vector-id1183700913?b=1&k=20&m=1183700913&s=170x170&h=Hey0vHg4Hvc_wNScloeRFL_SEqbi9MCahsZqet_UBx0=",
            "inStock": "Есть на складе"
        }
    }
    console.log(goods);
    var outForMiniShop = "";
    for(var key in goods){
        outForMiniShop +='<div class="minishop"><b>' + goods[key].name + "</b><br>";
        outForMiniShop +='<img src = "' + goods[key].img + '" width="128px"><br>';
        outForMiniShop +='Цена: ' + goods[key].cost + "<br>";
        outForMiniShop +=goods[key].inStock + "</div>";
        console.log(outForMiniShop);
       
    }
    document.getElementById('miniShopOut').innerHTML = outForMiniShop;
}
bbc();