const body = document.querySelector("body");
let openModal = function (val) {
  let modalopen = document.querySelector(`.${val}`);
  modalopen.classList.add("modalshow");
  document.querySelector(".backdrop").style.display = "block";
};

let closeModal = function (val) {
  let modalcose = document.querySelector(`.${val}`);
  modalcose.classList.remove("modalshow");
  document.querySelector(".backdrop").style.display = "none";
};
let closemodalgen = function (e) {
  let modalall = document.querySelector(".modalshow");
  modalall.classList.remove("modalshow");
  e.target.style.display = "none";
};
// document.querySelector(".backdrop").addEventListener("click", closemodalgen);

//add header

let header = document.querySelector("header");
let loginbtn = document.querySelector(".loginBtn");
let showHeader = function () {
  let menuList = ["Home", "Act Now!", "FAQ", "Contact Us"];

  let menuUl = document.querySelector(".menu>ul");

  menuList.forEach((elm) => {
    let list = `<li> <a href="#" class="nav-link">${elm}</a></li>`;

    menuUl.insertAdjacentHTML("beforeend", list);
  });

  const logoBlock = document.querySelector(".logoBlock");
  let logosec = ` <a class="nav_logo">
    <img src="" class="logo">
 </a>`;
  logoBlock.insertAdjacentHTML("beforeend", logosec);
  document.querySelector(".nav").classList.add("flexNav");
  document.querySelector(".logo").src = "logo22.png";
  let logoheight = getComputedStyle(document.querySelector(".nav")).height;

  header.style.height = parseFloat(logoheight) + 30 + "px";
  document.querySelector(".logo").style.height =
    parseFloat(header.style.height) - 20 + "px";
  // document.querySelector(".logo").setAttribute("src", "logo22.png");

  // document.querySelector("li").setAttribute("listname", "firstlist"); //set custom attributes
};
showHeader();

// let showHeader2 = function () {
//   loginbtn.textContent = "LoggedIn";
//   let menuList = ["abc", "aa Now!", "aaa", "aa Us"];

//   let menuUl = document.querySelector(".menu>ul");

//   menuList.forEach((elm) => {
//     let list = `<li> <a href="#" class="nav-link">${elm}</a></li>`;
//     console.log(list);

//     menuUl.innerHTML = list;
//   });
// };

// loginbtn.addEventListener("click", showHeader2);
