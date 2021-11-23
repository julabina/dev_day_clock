const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const secondes = document.querySelector(".secondes");

const refresh = () => {
  let a = 1000;
  setTimeout("showDate()", a);
};

const showDate = () => {
  currentTime = new Date();
  currentHours = currentTime.getHours();
  currentMinutes = currentTime.getMinutes();
  currentSecondes = currentTime.getSeconds();

  hours.textContent = currentHours;
  minutes.textContent = currentMinutes;
  secondes.textContent = currentSecondes;

  refresh();
};

showDate();
