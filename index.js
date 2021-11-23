const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const secondes = document.querySelector(".secondes");
const changePhrase = document.querySelector(".changePhrase");
const imgTime = document.querySelector(".picture");
const dayS = document.getElementById("daySelect");
const hourS = document.getElementById("hourSelect");
const currentBtn = document.getElementById("current");

let stopRefresh = 0;

const refresh = () => {
  let b = 1000;

  setTimeout(
    function () {
      if (stopRefresh === 1) {
        showDate(false);
      } else {
        showDate(true);
      }
    },

    b
  );
};

let daySelected, hourSelected;

const showDate = (current, cHour, cDay) => {
  if (current === true) {
    currentTime = new Date();
    currentDay = currentTime.getDay();
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSecondes = currentTime.getSeconds();
    daySelected = currentDay;
    hourSelected = currentHours;
    hourS.value = currentHours;
  } else {
    currentHours = parseInt(cHour);
    currentMinutes = 0;
    currentSecondes = 0;
    currentDay = parseInt(cDay);
  }

  if (currentHours < 10) {
    hours.textContent = "0" + currentHours;
  } else {
    hours.textContent = currentHours;
  }
  if (currentMinutes < 10) {
    minutes.textContent = "0" + currentMinutes;
  } else {
    minutes.textContent = currentMinutes;
  }
  if (currentSecondes < 10) {
    secondes.textContent = "0" + currentSecondes;
  } else {
    secondes.textContent = currentSecondes;
  }

  if (currentDay === 0) {
    dayS.value = "we2";
    if (currentHours < 4) {
      changePhrase.textContent = "Party time";
      imgTime.style.backgroundImage = "url(./assets/party.jpg)";
    } else if (currentHours === 12) {
      changePhrase.textContent = "Free Time";
      imgTime.style.backgroundImage = "url(./assets/free3.jpg)";
    } else if (currentHours === 13) {
      changePhrase.textContent = "Lunch time";
      imgTime.style.backgroundImage = "url(./assets/lunch.jpg)";
    } else if (currentHours > 13 && currentHours < 20) {
      changePhrase.textContent = "Free time";
      imgTime.style.backgroundImage = "url(./assets/free2.jpg)";
    } else if (currentHours === 20) {
      changePhrase.textContent = "Dinner time";
      imgTime.style.backgroundImage = "url(./assets/dinner.jpg)";
    } else if (currentHours > 20 && currentHours < 23) {
      changePhrase.textContent = "Free time";
      imgTime.style.backgroundImage = "url(./assets/free4.jpg)";
    } else {
      changePhrase.textContent = "Sleep time";
      imgTime.style.backgroundImage = "url(./assets/sleep.jpg)";
    }
  } else if (currentDay === 6) {
    dayS.value = "we1";
    if (currentHours < 11) {
      changePhrase.textContent = "Sleep time";
      imgTime.style.backgroundImage = "url(./assets/sleep.jpg)";
    } else if (currentHours > 10 && currentHours < 13) {
      changePhrase.textContent = "Free time";
      imgTime.style.backgroundImage = "url(./assets/free4.jpg)";
    } else if (currentHours === 13) {
      changePhrase.textContent = "Lunch time";
      imgTime.style.backgroundImage = "url(./assets/lunch.jpg)";
    } else if (currentHours > 13 && currentHours < 21) {
      changePhrase.textContent = "Free time";
      imgTime.style.backgroundImage = "url(./assets/free2.jpg)";
    } else if (currentHours === 21) {
      changePhrase.textContent = "Dinner time";
      imgTime.style.backgroundImage = "url(./assets/dinner.jpg)";
    } else {
      changePhrase.textContent = "Party time";
      imgTime.style.backgroundImage = "url(./assets/party.jpg)";
    }
  } else {
    dayS.value = "week";
    if (currentHours > 6 && currentHours < 9) {
      changePhrase.textContent = "Morning routine time";
      imgTime.style.backgroundImage = "url(./assets/morning.jpg)";
    } else if (currentHours > 8 && currentHours < 13) {
      changePhrase.textContent = "Work time";
      imgTime.style.backgroundImage = "url(./assets/work1.jpg)";
    } else if (currentHours === 13) {
      changePhrase.textContent = "Lunch time";
      imgTime.style.backgroundImage = "url(./assets/lunch.jpg)";
    } else if (currentHours > 13 && currentHours < 18) {
      changePhrase.textContent = "Work time";
      imgTime.style.backgroundImage = "url(./assets/work2.jpg)";
    } else if (currentHours > 17 && currentHours < 20) {
      changePhrase.textContent = "Free time";
      imgTime.style.backgroundImage = "url(./assets/free1.jpg)";
    } else if (currentHours === 20) {
      changePhrase.textContent = "Dinner time";
      imgTime.style.backgroundImage = "url(./assets/dinner.jpg)";
    } else if (currentHours > 20 && currentHours < 23) {
      changePhrase.textContent = "Free time";
      imgTime.style.backgroundImage = "url(./assets/free2.jpg)";
    } else {
      changePhrase.textContent = "Sleep time";
      imgTime.style.backgroundImage = "url(./assets/sleep.jpg)";
    }
  }
  if (current === true) {
    refresh();
  }
};

showDate(true);

currentBtn.addEventListener("click", () => {
  showDate(true);
  stopRefresh = 0;
});

hourS.addEventListener("change", () => {
  if (stopRefresh === 1) {
    let a = hourS.value;
    hourSelected = a;
    let b = daySelected;
    showDate(false, a, b);
  } else {
    stopRefresh = 1;
    setTimeout(function () {
      let a = hourS.value;
      hourSelected = a;
      let b = daySelected;
      showDate(false, a, b);
    }, 1000);
  }
});

dayS.addEventListener("change", (e) => {
  if (stopRefresh === 1) {
    let c = dayS.value;
    if (c === "week") {
      b = 1;
    } else if (c === "we1") {
      b = 6;
    } else {
      b = 0;
    }
    daySelected = b;
    let a = hourSelected;
    showDate(false, a, b);
  } else {
    stopRefresh = 1;
    setTimeout(function () {
      let c = dayS.value;
      if (c === "week") {
        b = 1;
      } else if (c === "we1") {
        b = 6;
      } else {
        b = 0;
      }
      daySelected = b;
      let a = hourSelected;
      showDate(false, a, b);
    }, 1000);
  }
});
