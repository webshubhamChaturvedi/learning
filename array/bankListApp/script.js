"use strict";

const account1 = {
  owner: "Shubham Chaturvedi vlink",
  transaction: [200, 450, -400, 3000, -650, -130, 70, 1300],
  username: "scv",
  pin: 9999,
  intrest: 1.2,
  movementsDates: [
    "2023-06-12T21:31:17.178Z",
    "2023-06-08T07:42:02.383Z",
    "2023-06-05T09:15:04.904Z",
    "2023-06-01T10:17:24.185Z",
    "2023-06-08T14:11:59.604Z",
    "2023-06-02T17:01:17.194Z",
    "2023-06-07T23:36:17.929Z",
    "2023-06-01T10:51:36.790Z",
  ],
};
const account2 = {
  owner: "Amit Bhoj",
  transaction: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  username: "ab",
  pin: 1800,
  intrest: 0.5,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
const account3 = {
  owner: "Sunil Khatri",
  transaction: [500, 300, -10, -79, -310, -100, 800, -301],
  username: "sk",
  pin: 9999,
  intrest: 1,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};

const navbar = document.querySelector("nav");
let loginBtn = document.querySelector(".login__btn");

const transcationContainer = document.querySelector(".transcationContainer");
const summary = document.querySelector(".summary");
let summerIn = document.querySelector(".summer_in");
let summerOut = document.querySelector(".summer_out");
let summerIntrest = document.querySelector(".summer_intrest");
let userName = document.querySelector(".login__input--user");
let userPass = document.querySelector(".login__input--pin");
let welcomeLabel = document.querySelector(".welcome");
let totalBalance = document.querySelector(".balance__value");
let maindate = document.querySelector(".date");
//transfer input
let transferAccount = document.querySelector(".form__input--to");
let transferMoney = document.querySelector(".form__input--amount");
const transferBtn = document.querySelector(".form__btn--transfer");

//delete Account

let deteleUser = document.querySelector(".form__input--user");
let deteleuserPin = document.querySelector(".form__input--pin");
const dteteUserBtn = document.querySelector(".form__btn--close");
//loan Account

const loanInput = document.querySelector(".form__input--loan-amount");
const loanBtn = document.querySelector(".form__btn--loan");
//sort list

const sortbtn = document.querySelector(".btn--sort");

const logoutLabel = document.querySelector(".logoutTimer");

//logout Function after given time

let logoutFunction = function () {
  let time = 40;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    logoutLabel.textContent = `Remaining logout time : ${min}:${sec} min`;

    if (time <= 5) {
      logoutLabel.style.color = "red";
    }
    if (time >= 0) {
      time--;
    } else {
      clearInterval(timer);
      reset();
    }
  };

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

//date function

const datefornate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const formatedate = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };
  const daypassed = formatedate(new Date(), date);
  if (daypassed === 0) {
    return "Today";
  }
  if (daypassed === 1) {
    return "Yesterday";
  }
  if (daypassed <= 7) {
    return `${daypassed} days ago`;
  } else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = `${date.getFullYear()}`;
    const fulldate = `${day}/ ${month}/${year}`;
    return fulldate;
  }
};

const updateUI = function (acc, sort = false) {
  transcationContainer.innerHTML = "";
  const sortCond = sort
    ? acc.transaction.slice().sort((a, b) => b - a)
    : acc.transaction;
  console.log(sortCond);
  sortCond.forEach(function (val, i) {
    const date = new Date(acc.movementsDates[i]);
    const newdate = datefornate(date);
    console.log(newdate);
    const lebeltype = val > 0 ? "deposit" : "withdrawal";
    const html = ` <div class="common_row">
    <label class="type_label type--${lebeltype}">${i + 1} ${lebeltype}</label>
    <label class="time_label">${newdate}
    </label>
    <div class="money">${val}€</div>
    </div>`;
    transcationContainer.insertAdjacentHTML("afterbegin", html); //add the date from top to bottom
  });
  let newrow = document.querySelectorAll(".common_row");

  console.log([...newrow]);

  // [...newrow].forEach((arr, i) => {
  //   if (i % 2 === 0) {
  //     arr.style.backgroundColor = "red";
  //   }
  // });   worked on every 2nd Row (2,4,6,8,10,12....)

  // [...newrow].forEach((arr, i) => {
  //   if (i % 3 === 0) {
  //     arr.style.backgroundColor = "blue";
  //   }
  // }); worked on every 3nd Row  (3,6,9,12)
};

let dateString = "01 / 06 / 2023";
let setdate = new Date(dateString);

let evalvalue = 0;
transcationContainer.innerHTML = "";

let date = new Date();
let second = `${date.getSeconds()}`.padStart(2, 0);
const min = `${date.getMinutes()}`.padStart(2, 0);
const hours = `${date.getHours()}`.padStart(2, 0);

// let abc = function () {
//   setInterval(() => {
//     return second;
//   }, 1000);
// };

maindate.textContent = `${date.getDate()} / ${
  date.getMonth() + 1
} / ${date.getFullYear()}, ${hours}:${min}:${second}`;

let intrest;
function getintrest(acc) {
  intrest = acc.transaction
    .filter((val, i, arr) => {
      return val > 0;
    })
    .map((deposite) => (deposite * acc.intrest) / 100)
    .filter((dep) => dep > 1)
    .reduce((acc, cur, i, arr) => acc + cur, 0);

  summerIntrest.textContent = `${intrest} €`;
  // console.log(intrest);
  transactionFunction(acc);
}
// let invalue = 0;
// let outvalue = 0;
// let convertInr = account1.transaction.map((elm) => elm * 2); //map method with Arrow function
// let convertInr2 = account1.transaction.map((elm) => {
//   return elm * 2;
// }); //map method with Arrow function with return (convertInr and convertInr2 both are same)
// console.log(convertInr2);
function transactionFunction(movement) {
  movement.transaction.forEach(function (val, i) {
    // evalvalue += val;
    // if (val > 0) {
    //   invalue += val;
    // } else {
    //   outvalue += val;
    // }

    let invalue = movement.transaction
      .filter((arr) => arr > 0)
      .reduce((acc, val) => acc + val, 0); //Deposite value
    let outvalue = movement.transaction
      .filter((arr) => arr < 0)
      .reduce((acc, val) => acc + val, 0); //winddraw value

    // console.log(intrest);

    summerIn.textContent = `${invalue} €`;
    summerOut.textContent = `${Math.abs(outvalue)} €`;

    evalvalue = movement.transaction.reduce((acc, cur) => acc + cur);
    // console.log(evalvalue);
  });
  movement.transaction.money = evalvalue;

  // console.log(movement);
  updateUI(movement);

  totalBalance.textContent = `${evalvalue + intrest} €`;

  //intrset

  //By map Method
  // movement.map((elm, i) => {
  //   let type = elm > 0 ? "deposit" : "withdrawal";
  //   let newhtml = `<div class="common_row">
  //   <label class="type_label type--${type}">${type}</label>
  //   <label class="time_label"></label>
  //   <div class="money">${elm}</div>
  // </div>`;
  //   transcationContainer.insertAdjacentHTML("afterbegin", newhtml);
  // });
}
//Get intrest

// transactionFunction(account1.transaction);

// let getname = function (name) {
//   name.forEach(function (val) {
//     val.username = val.owner
//       .toLowerCase()
//       .split(" ")
//       .map((elm) => elm.slice(0, 1))
//       .join("");
//   });
//   // return getusername;
// };
// let owners = [account1, account2, account3];
// getname(owners);
// console.log(owners);

// transactionFunction(convertInr);

// transactionFunction(account2.transaction);
let owners = [account1, account2, account3];

let filterredElm = account1.transaction.filter((elm) => elm > 0);

let withdrawalval = account1.transaction.filter((elm) => elm < 0);

let reduceVal = account1.transaction.reduce(function (acc, a) {
  return acc + a;
});
//updateUI

let findMax = account1.transaction.reduce(function (acc, cur) {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, account1.transaction[0]);
let findMin = account1.transaction.reduce(function (acc, cur) {
  if (acc > cur) {
    return cur;
  } else {
    return acc;
  }
}, account1.transaction[0]);

// console.log(findMax, findMin);

// for (let acc of owners) {
//   if (acc.owner === "Amit Bhoj") {
//     console.log(acc);
//   }
// }

//login the user
// let findmethod = owners.find((name) => {
//   let compareusername = name.username === "ab";
//   return compareusername;
// });
// console.log(findmethod.username);//find method

let currentAccount, timer;
loginBtn.addEventListener("click", function (e) {
  e.preventDefault(); //prevent form to submitting
  // logoutFunction();
  currentAccount = owners.find((acc) => acc.username === userName.value); // use case of find method
  if (currentAccount?.pin === Number(userPass.value)) {
    userName.style.display = "none";
    userPass.style.display = "none";
    loginBtn.style.display = "none";
    welcomeLabel.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    document.querySelector(".mainApp").classList.add("show");
    // transactionFunction(currentAccount.transaction);
    getintrest(currentAccount); //function intrest
  }
  userName.value = userPass.value = "";
  if (timer) clearInterval(timer);
  timer = logoutFunction();
}); //event handler for login;

//transfer money to account
transferBtn.addEventListener("click", function (e) {
  let UserBalance = totalBalance.innerHTML.split(" ")[0];
  e.preventDefault();
  let amount = Number(transferMoney.value);
  const reciveAcc = owners.find(
    (acc) => acc.username === transferAccount.value
  );
  if (
    amount > 0 &&
    reciveAcc &&
    UserBalance > amount &&
    currentAccount.username !== reciveAcc.username
  ) {
    currentAccount.transaction.push(-amount);
    currentAccount.movementsDates.push(new Date());
    reciveAcc.transaction.push(amount);
    amount = transferAccount.value = "";
    // transactionFunction(currentAccount.transaction);
    getintrest(currentAccount);
  }
});
//delete User

dteteUserBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let deleteUsername = deteleUser.value;
  let deleteUserPin = Number(deteleuserPin.value);
  deteleUser.value = deteleuserPin.value = "";
  if (
    deleteUsername === currentAccount.username &&
    deleteUserPin === currentAccount.pin
  ) {
    const index = owners.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    owners.splice(index, 1);

    reset();
  }
});

//loan

loanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmmount = Number(loanInput.value);
  console.log(currentAccount.transaction.money);
  if (
    currentAccount.transaction.money > loanAmmount &&
    loanAmmount > 0 &&
    currentAccount.transaction.some((arr) => arr > loanAmmount * 0.1)
  ) {
    currentAccount.movementsDates.push(new Date());
    currentAccount.transaction.push(loanAmmount);
    getintrest(currentAccount);
  }
  loanInput.value = "";
});

//sort the element
let sorted = false;
sortbtn.addEventListener("click", function (e) {
  e.preventDefault();
  updateUI(currentAccount, !sorted);
  sorted = !sorted;
});

//reset all value
let reset = function () {
  document.querySelector(".mainApp").classList.remove("show");
  summerIntrest.textContent = "";
  summerIn.textContent = "";
  summerOut.textContent = "";
  totalBalance.textContent = "";
  transcationContainer.innerHTML = "";
  userName.style.display = "block";
  userPass.style.display = "block";
  loginBtn.style.display = "block";
  welcomeLabel.textContent = "Log in to get started";
};

// setTimeout(() => {
//   console.log("logout");
//   reset();
// }, 100100000);

// let alltransaction = owners.map((arr) => arr.transaction);

// let allOwnerTra = alltransaction.flat();
// console.log(alltransaction, allOwnerTra);

const bankDepositSum = owners
  .map((arr) => arr.transaction)
  .flat()
  .filter((arr) => arr > 0)
  .reduce((sum, val) => sum + val, 0);

console.log(bankDepositSum);

const numDeposits1000 = owners
  .flatMap((arr) => arr.transaction)
  .filter((arr) => arr >= 1000).length;

const numDeposits1000New = owners
  .flatMap((arr) => arr.transaction)
  .reduce((acc, cur) => (cur > 1000 ? ++acc : acc), 0);

console.log(numDeposits1000New);

const sums = owners
  .flatMap((arr) => arr.transaction)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposits += cur) : (acc.withdraw += cur);
      return acc;
    },
    { deposits: 0, withdraw: 0 }
  );

console.log(sums);
