// 'use strict'

let emojiimg = document.getElementById("emoji");
let starticon = document.querySelectorAll(".fa-star");
let message = document.getElementById("ratingmessage");

// starticon.forEach((icon)=>{
//   icon.addEventListener('cilck',()=>{
//     emojiimg.src = "img/sad2.png";
//     message.innerHTML='The rating is Very Low';
//     message.style.color='red'
//   })
// });

starticon[0].addEventListener("click", () => {
  emojiimg.src = "img/sad2.png";
  message.innerHTML = "The rating is Very Low";
  message.style.color = "red";
  starticon[0].style.color = "#ffd93b";
  starticon[1].style.color = "#6a6969";
  starticon[2].style.color = "#6a6969";
  starticon[3].style.color = "#6a6969";
  starticon[4].style.color = "#6a6969";
});
starticon[1].addEventListener("click", () => {
  emojiimg.src = "img/sad.png";
  message.innerHTML = "The rating is Very Low";
  message.style.color = "red";
  starticon[0].style.color = "#ffd93b";
  starticon[1].style.color = "#ffd93b";
  starticon[2].style.color = "#6a6969";
  starticon[3].style.color = "#6a6969";
  starticon[4].style.color = "#6a6969";
});

starticon[2].addEventListener("click", () => {
  emojiimg.src = "img/sad.png";
  message.innerHTML = "The rating is  Low";
  message.style.color = "#3b47ff";
  starticon[0].style.color = "#ffd93b";
  starticon[1].style.color = "#ffd93b";
  starticon[2].style.color = "#ffd93b";
  starticon[3].style.color = "#6a6969";
  starticon[4].style.color = "#6a6969";
});
starticon[3].addEventListener("click", () => {
  emojiimg.src = "img/smile.png";
  message.innerHTML = "The rating is  good";
  message.style.color = "rgb(255 167 59)";
  starticon[0].style.color = "#ffd93b";
  starticon[1].style.color = "#ffd93b";
  starticon[2].style.color = "#ffd93b";
  starticon[3].style.color = "#ffd93b";
  starticon[4].style.color = "#6a6969";
});
starticon[4].addEventListener("click", () => {
  emojiimg.src = "img/party.png";
  message.innerHTML = "The rating is Exceelent";
  message.style.color = "#ff5566";
  starticon[0].style.color = "#ffd93b";
  starticon[1].style.color = "#ffd93b";
  starticon[2].style.color = "#ffd93b";
  starticon[3].style.color = "#ffd93b";
  starticon[4].style.color = "#ffd93b";
});
