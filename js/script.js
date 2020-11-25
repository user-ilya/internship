const myName = prompt("Введите ваше имя", ""),
      age =prompt("Введите ваш возраст", ""),
      btn = document.querySelector(".button__main"),
      textLorem = document.querySelector(".text");
    

alert(`Привет,${myName}!`);

    textLorem.addEventListener("mouseover", () => {
        if (age >= 18) {
        console.log("Событие успешно произведено");
        } else if (age < 18 ) {
            alert("Вам еще нет 18 лет");
        }
        else {
            alert("Error");
        }
    });
    
// конкатенация 
console.log(typeof("string" + (+"7")));
console.log(typeof("string" + true));


function sumNumbers (a,b) {
    return a + b;
}
try {
    btn.addEventListener("mouseover", () => {
      console.log(sumNumbers(4,6));
        
    });
} catch (error) {
    console.log(error.name); 
}

let user = 0;
try {
    user = 5/d;
} catch (error) {
    console.log("Ошибка");
}
// экранирование 
alert( "Глава 5.1".match(/\d\.\d/) );
alert(`Вставка элемента \${}\ - отменяется`);