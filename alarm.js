const selectMenu = document.querySelectorAll("select");
const header = document.querySelector("h1");
const alarmbtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmtime, alarmset = false,
    ringtone = new Audio("./nyota.mp3");


// For hours.
for (let i = 0; i <= 24; i++) {
    i = (i < 10) ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].insertAdjacentHTML("beforeend", option);
}

// For minutes.
for (let i = 0; i <= 59; i++) {
    i = (i < 10) ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].insertAdjacentHTML("beforeend", option);
}

setInterval(() => {
    //getting hours and minutes
    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    m = (minutes < 10) ? "0" + minutes : minutes;
    header.innerText = `${hours} : ${m}`;

    if (alarmtime == (`${hours} : ${m}`).toString()) {
        console.log("Alarm is ringing");
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);

alarmbtn.addEventListener('click', () => {
    let time = `${selectMenu[0].value}:${selectMenu[1].value}`;
    if (time.includes("Hour") || time.includes("Minute")) {
        alert("Please select a valid Time");
    }
    alarmtime = time;
    content.classList.add("disabled");
    alarmbtn.innerText = "Clear Alarm";
});