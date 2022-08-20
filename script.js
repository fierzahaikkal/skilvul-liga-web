function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navbar');
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

let valuesWrap = document.querySelectorAll(".num");
let interval = 5000;


valuesWrap.forEach((valDisplay) => {
  let start = 0;
  let end = parseInt(valDisplay.getAttribute("data-val"));
  let time = Math.floor(interval / end);
  let count = setInterval(function (){
    start += 1;
    valDisplay.textContent = start;
    if(start === end){
      clearInterval(count);
    }
  }, time);
});