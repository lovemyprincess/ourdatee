// ===========================
// ЧАСТЬ 1
// ===========================

// ---------- Элементы ----------

const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextDate = document.getElementById("nextDate");
const finish = document.getElementById("finish");
const hug = document.getElementById("hug");

const typing = document.getElementById("typing");
const typing2 = document.getElementById("typing2");
const question = document.getElementById("question");
const loveText = document.getElementById("loveText");
const finalText = document.getElementById("finalText");

const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");
const roses = document.getElementById("roses");

const dateInput = document.getElementById("date");

let selectedTime = "";

// ---------- Запрет прошлых дат ----------

dateInput.min = new Date().toISOString().split("T")[0];

// ---------- Переключение экранов ----------

function showScreen(id){

    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}

// ---------- Печатание текста ----------

function typeText(element,text,speed=40,callback){

    element.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            if(callback){
                callback();
            }

        }

    },speed);

}

// ---------- Первый экран ----------

typeText(

typing,

"Привет, Любими ❤️",

60,

()=>{

    typeText(

        typing2,

        "У меня есть к тебе один очень важный вопрос...",

        40

    );

}

);

// ---------- Кнопка Продолжить ----------

startBtn.onclick=()=>{

    showScreen("screen2");

    typeText(

        question,

        "Любими, устроим наше первое "свидание" будем смотреть фильм вместе? 🥹❤️",

        40

    );

};

// ---------- Убегающая кнопка ----------

const noTexts=[

"Не-а 😜",
"Попробуй поймай 🤭",
"Не получится 😂",
"Жми Да ❤️",
"Хи-хи 🙈",
"Ну нееет 😅"

];

function moveButton(){

    const maxX=window.innerWidth-noBtn.offsetWidth-20;

    const maxY=window.innerHeight-noBtn.offsetHeight-20;

    noBtn.style.position="fixed";

    noBtn.style.left=Math.random()*maxX+"px";

    noBtn.style.top=Math.random()*maxY+"px";

    noBtn.innerText=noTexts[
        Math.floor(Math.random()*noTexts.length)
    ];

    noBtn.style.transform=
        `rotate(${Math.random()*40-20}deg)`;

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    moveButton();


} );

// ---------- Выбор времени ----------

document.querySelectorAll(".time").forEach(button=>{

    button.onclick=()=>{

        document
        .querySelectorAll(".time")
        .forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        selectedTime=button.innerText;

    };

});
// ===========================
// ЧАСТЬ 2
// ===========================

// ---------- Сердечки ----------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "item";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

// ---------- Лепестки ----------

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "item";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (18 + Math.random() * 15) + "px";
    petal.style.animationDuration = (6 + Math.random() * 4) + "s";

    petals.appendChild(petal);

    setTimeout(() => petal.remove(), 10000);
}

// ---------- Розы ----------

function createRose() {

    const rose = document.createElement("div");

    rose.className = "item";
    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.fontSize = (22 + Math.random() * 16) + "px";
    rose.style.animationDuration = (5 + Math.random() * 3) + "s";

    roses.appendChild(rose);

    setTimeout(() => rose.remove(), 9000);
}

// ---------- Кнопка Да ----------

yesBtn.onclick = () => {

    // открываем экран
    showScreen("screen3");

    // открываем конверт
    setTimeout(() => {
        document
            .getElementById("envelope")
            .classList
            .add("open");
    }, 500);

    // запускаем дождь
    for (let i = 0; i < 40; i++) {
        setTimeout(createRose, i * 120);
        setTimeout(createHeart, i * 80);
    }

    // миньон подпрыгивает
    const minion = document.querySelector(".minion");

    if (minion) {
        minion.style.animation = "jump .45s infinite";
    }

    typeText(
        loveText,
        "Урааа! ❤️\n\nЯ очень счастлив!\n\nТеперь осталось выбрать дату нашего свидания 🥹💕",
        35
    );

};

// ---------- Постоянные эффекты ----------

setInterval(createHeart, 800);

setInterval(createPetal, 1100);
// ===========================
// ЧАСТЬ 3 (ФИНАЛ)
// ===========================

// ---------- Открыть календарь ----------

nextDate.onclick = () => {

    showScreen("screen4");

};

// ---------- Подтвердить ----------

finish.onclick = () => {

    if(dateInput.value===""){

        alert("❤️ Выбери дату!");

        return;

    }

    if(selectedTime===""){

        alert("⏰ Выбери время!");

        return;

    }

    showScreen("screen5");

    typeText(

        finalText,

`Спасибо, Любими ❤️

Наше свидание назначено!

📅 ${dateInput.value}

🕒 ${selectedTime}

Я уже считаю дни к этому событию 🥹💕

Люблю тебя бесконечно ❤️`,

35

    );

    // праздничный дождь

    for(let i=0;i<70;i++){

        setTimeout(createHeart,i*70);
        setTimeout(createPetal,i*100);
        setTimeout(createRose,i*120);

    }

};

// ---------- Обнимаю ----------

hug.onclick=()=>{

    for(let i=0;i<180;i++){

        setTimeout(createHeart,i*25);

    }

};

// ---------- Дополнительная красота ----------

// Иногда появляются дополнительные сердечки

setInterval(()=>{

    if(Math.random()>0.5){

        createHeart();

    }

},5000);

// Иногда появляются розы

setInterval(()=>{

    if(Math.random()>0.6){

        createRose();

    }

},7000);

// Иногда появляются лепестки

setInterval(()=>{

    if(Math.random()>0.4){

        createPetal();

    }

},6000);
window.onload = () => {

    showScreen("screen1");

};

// ===========================
// Конец script.js
// ===========================
