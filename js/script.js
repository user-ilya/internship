"use strict"

const myName = prompt("Введите ваше имя", ""),
    age = prompt("Введите ваш возраст", ""),
    btn = document.querySelector(".button__main"),
    textLorem = document.querySelector(".text"),
    mainText = document.querySelector("h1"),
    footerBlock = document.querySelectorAll(".footer__block"),
    inputMark = document.querySelectorAll("input"),
    linkDef = document.querySelector("#link"),
    inputFocus = () => {
        inputMark.forEach((item) => {
            item.style.backgroundColor = "#ffe1e1";
            item.style.borderRadius = "5px";
        });

    };


alert(`Привет,${myName}!`);

textLorem.addEventListener("mouseover", () => {
    if (age >= 18) {
        console.log("Событие успешно произведено");
    } else if (age < 18) {
        alert("Вам еще нет 18 лет");
    } else {
        alert("Error");
    }
});

// конкатенация 
console.log(typeof ("string" + (+"7")));
console.log(typeof ("string" + true));


function sumNumbers(a, b) {
    return a + b;
}
try {
    btn.addEventListener("click", () => {
        console.log(sumNumbers(4, 6));
        sessionStorage.clear();
    });
} catch (error) {
    console.log(error.name);
}

let user = 0;
try {
    user = 5 / d;
} catch (error) {
    console.log("Ошибка");
}
// экранирование 
alert("Глава 5.1".match(/\d\.\d/));
alert(`Вставка элемента \${}\ - отменяется`);




mainText.innerText = "Добро пожаловать";

footerBlock.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
        item.style.background = "#ff0000";
    });
    item.addEventListener("mouseout", function () {
        item.style.background = "transparent";
    });
    item.addEventListener("click", () => {
        item.textContent = `Я блок №${i + 1}`;
        item.style.cssText = "line-height:100px; text-align: center;";
    });
});

inputMark.forEach((item) => {
    item.addEventListener('focus', inputFocus);
    item.addEventListener("blur", () => {
        item.style.backgroundColor = "transparent";
    });
});

/* linkDef.addEventListener('click', (link) => {
    link.preventDefault(console.log("Действие по умолчанию отключено"));
}); */


// Arrow function 
let sumElems;
let mas = [1, 5, 8, 10, 4, 2];
let  numberOne = mas[3];
    console.info(numberOne);
    console.log(mas.lastIndexOf(10));
    mas.sort();
    mas.forEach((value, i) => {
        if (Array.isArray(mas)) {
            console.log(`${i + 1} элемент в массиве со значением ${value}`);

        } 
  sumElems = mas.reduce((value, start) => {return start + value});
    console.log(sumElems);
    }); 

// деструктуризация объекта 
let obj = {
    name: "Ilya",
    age: "19",
    gender: "male",
    friend: {
        one: "Mike",
        two: "Alex",
        three: "Ilya"
    }
}; 
    const {one, two, three} = obj.friend;
    console.log(two);

    
    for (let key in obj) {
        console.log(`Свойство ${key} со значением ${obj[key]}`);
    }
    console.log(Object.keys(obj));

// yield

    function *Programm () {
        let i = 0;
        while (true) {
            yield i++
        }
    }
    let x = Programm();
    console.log(x.next())
    console.log(x.next())
    console.log(x.next())
    console.log(x.next().value)

// spread and rest 
const array = function (a, ...rest) {
    console.log(a, rest);
}

array("number", "operator", "list", "object");

function arrSpread (a, ...rest) {
    console.log(a);
    console.log(rest);
}
const arr = ["Привет", "Мир", "!!!"];
arrSpread(...arr);

class Car {
    constructor (engine, body, prace) {
       this.engine = engine;
       this.body = body;
       this.prace = prace;
    }
    launch() {
        console.log("Ваша машина завелась");
    }

}

class Bmw extends Car {
    constructor(brand, engine, body, prace) {
        super(engine, body, prace);
        console.log(`Автомобиль марки ${brand} имееет двигатель объемом ${engine} л, кузов ${body} и его цена ${prace}$`);
    }
    launch() {
        super.launch();
        console.log("Врум-Врум");
    }
    
}

const carGo = new Bmw("BMW",3.0,"sport",5000000);
carGo.launch();

// internship 6

const url = window.location.href; 
alert(url);


//history.pushState("Дублирование" ,null, "http://127.0.0.1:5500/internship/#");
console.log(window.history.state);

localStorage.setItem("name", "Ilya");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("password", "12345");

// Cookies 
document.cookie = "user = ilya; domain = 127.0.0.1; path=/";

// internship 7
// Promise 

    
    // fetch

    

    async function resolved () {
        return await fetch('https://api.github.com/users/user-ilya/repos') // url, на который посылаем запрос 
        .then(response => response.json())
        .then(json =>  console.log(json))
        .catch(() => {
            alert(Error.name);
        })
    } 
    resolved()

    const promise =  new Promise ((resolve, reject) => {
        
        console.log("Получение данных ...");
        const fetchArr = fetch('https://api.github.com/users/user-ilya/repos1111')
        resolve(fetchArr); // url, на который посылаем запрос 
    });
    
    promise.then(response => response.json(fetchArr))
    .then(json =>  console.log(json), () => console.log(Error.name));
