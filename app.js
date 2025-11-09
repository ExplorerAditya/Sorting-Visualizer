"use strict";
const start = async () => {
  let algoValue = Number(document.querySelector("#algo-menu").value);
  let speedValue = Number(document.querySelector("#speed-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }
  if (algoValue === 0) {
    alert("No Algorithm Selected");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if (algoValue === 1) await algorithm.BubbleSort();
  if (algoValue === 2) await algorithm.SelectionSort();
  if (algoValue === 3) await algorithm.InsertionSort();
  if (algoValue === 4) await algorithm.MergeSort();
  if (algoValue === 5) await algorithm.QuickSort();
};

const RenderScreen = () => {
  RenderList();
};

const RenderList = () => {
  let sizeValue = Number(document.querySelector("#size-menu").value);
  clearScreen();

  let list = randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const RenderArray = (sorted) => {
  let sizeValue = Number(document.querySelector("#size-menu").value);
  clearScreen();

  let list = randomList(sizeValue);
  if (sorted) list.sort((a, b) => a - b);

  const arrayNode = document.querySelector(".array");
  const divnode = document.createElement("div");
  divnode.className = "s-array";

  for (const element of list) {
    const dnode = document.createElement("div");
    dnode.className = "s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
  arrayNode.appendChild(divnode);
};

const randomList = (Length) => {
  let list = new Array();
  let lowerBound = 1;
  let upperBound = 100;

  for (let counter = 0; counter < Length; ++counter) {
    let randomNumber = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    list.push(parseInt(randomNumber));
  }
  return list;
};

const clearScreen = () => {
  document.querySelector(".array").innerHTML = "";
};

const response = () => {
  let Navbar = document.querySelector(".navbar");
  const iconButton = document.querySelector(".icon");
  if (Navbar.className === "navbar") {
    Navbar.className += " responsive";
    iconButton.setAttribute("aria-expanded", "true");
  } else {
    Navbar.className = "navbar";
    iconButton.setAttribute("aria-expanded", "false");
  }
};

document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector("#size-menu").addEventListener("change", RenderScreen);
document.querySelector("#algo-menu").addEventListener("change", RenderScreen);
document.querySelector("#random").addEventListener("click", RenderScreen);
document.querySelector("#title-header").addEventListener("click", () => {
  window.location.reload();
});
document.querySelector("#title-header").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    window.location.reload();
  }
});
window.onload = RenderScreen;

