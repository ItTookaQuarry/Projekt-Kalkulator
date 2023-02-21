let table = [];
let wynik = document.querySelector("#wynik");

let kropka = document.querySelector(".kropka");
kropka.addEventListener("click", () => {
  if (wynik.innerHTML == 0) {
    wynik.innerHTML = wynik.innerHTML + ".";
  } else if (
    table.length == 1 ||
    isNaN(wynik.innerHTML + "." + 1 * 1) == true
  ) {
    return;
  } else if (
    wynik.innerHTML !== "0" &&
    wynik.innerHTML !== "*" &&
    wynik.innerHTML !== "+" &&
    wynik.innerHTML !== "-" &&
    wynik.innerHTML !== "/"
  ) {
    wynik.innerHTML = wynik.innerHTML + ".";
  }
});

let tab = [];
let liczby2 = [];
let liczby = document.querySelectorAll(".liczba");

for (let i = 0; i < liczby.length; i++) {
  liczby2.push(liczby[i]);
  liczby2[i].addEventListener("click", dodajdowyniku);
}
console.log(table);

function dodajdowyniku() {
  console.log(this);
  if (tab.length == 1) {
    tab.pop();
  }
  if (table.length == 1) {
    table.pop();
    wynik.innerHTML = this.innerHTML;
  } else if (
    wynik.innerHTML !== "0" &&
    wynik.innerHTML !== "*" &&
    wynik.innerHTML !== "+" &&
    wynik.innerHTML !== "-" &&
    wynik.innerHTML !== "/"
  ) {
    wynik.innerHTML = wynik.innerHTML + this.innerHTML;
  } else if (wynik.innerHTML == "0") {
    wynik.innerHTML = this.innerHTML;
  } else if (wynik.innerHTML == "*") {
    wynik.innerHTML = this.innerHTML;
  } else if (wynik.innerHTML == "-") {
    wynik.innerHTML = this.innerHTML;
  } else if (wynik.innerHTML == "+") {
    wynik.innerHTML = this.innerHTML;
  } else if (wynik.innerHTML == "/") {
    wynik.innerHTML = this.innerHTML;
  }
  tab.push(1);
}

let znaki2 = [];
let znaki = document.querySelectorAll(".znak");

for (let i = 0; i < znaki.length; i++) {
  znaki2.push(znaki[i]);
  znaki2[i].addEventListener("click", dodajznakdowyniku);
}

console.log(table);
function dodajznakdowyniku() {
  console.log(this.innerHTML);
  if (
    wynik.innerHTML == "*" ||
    wynik.innerHTML == "/" ||
    wynik.innerHTML == "+" ||
    wynik.innerHTML == "-" ||
    wynik.innerHTML == "=" ||
    tab.length == 0
  ) {
    return;
  } else if (table.length == 1) {
    table.push(this.innerHTML);
    wynik.innerHTML = this.innerHTML;
  } else if (table.length !== 1) {
    console.log(this);
    let zmienna = wynik.innerHTML * 1;
    table.push(zmienna);
    table.push(this.innerHTML);
    wynik.innerHTML = this.innerHTML;
  }
}

document.querySelector("#Usunąć").addEventListener("click", usunąć);
function usunąć() {
  table.splice(0, table.length);
  wynik.innerHTML = "0";
}

document.querySelector(".równość").addEventListener("click", równość);
function równość() {
  if (
    wynik.innerHTML == "*" ||
    wynik.innerHTML == "/" ||
    wynik.innerHTML == "+" ||
    wynik.innerHTML == "-" ||
    wynik.innerHTML == "="
  ) {
    return;
  } else if (
    wynik.innerHTML !== "*" ||
    wynik.innerHTML !== "/" ||
    wynik.innerHTML !== "+" ||
    wynik.innerHTML !== "-"
  ) {
    table.push(wynik.innerHTML * 1);
  }
  let i = 0;
  while (i <= table.length) {
    if (table[i + 1] == "*" && i == 0) {
      table.splice(i, 3, table[i] * table[i + 2]);
      i = 0;
    } else if (table[i + 1] == "/" && i == 0) {
      table.splice(i, 3, table[i] / table[i + 2]);
      i = 0;
    }
    if (table[i] == "*") {
      table.splice(i - 1, 3, table[i - 1] * table[i + 1]);
      i = 0;
    }
    if (table[i] == "/") {
      table.splice(i - 1, 3, table[i - 1] / table[i + 1]);
      i = 0;
    }
    i = i + 1;
    console.log(table);
  }
  for (let i = 0; i <= table.length; i++) {
    if (table[i] == "+") {
      table.splice(i - 1, 3, table[i - 1] + table[i + 1]);
      i = 0;
    } else if (table[i] == "-") {
      table.splice(i - 1, 3, table[i - 1] - table[i + 1]);
      i = 0;
    }
    let wyniki = table[0];
    wynik.innerHTML = wyniki;
  }
}
