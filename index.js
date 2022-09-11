let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn")
let bars_container = document.getElementById("bars_container")
let slider = document.getElementById("slider");
let minRange = 1;
let maxRange = slider.value;
let numOfBars = slider.value;
let unsorted_array = new Array(numOfBars)

slider.addEventListener("input", function () {
  numOfBars = slider.value;
  maxRange = slider.value;
  //console.log(numOfBars);
  bars_container.innerHTML = "";
  unsorted_array = createRandomArray();
  renderBars(unsorted_array);
});

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
  let array = new Array(numOfBars);
  for (let i = 0; i < numOfBars; i++) {
    array[i] = randomNum(minRange, maxRange);
  }

  return array;
}

document.addEventListener("DOMContentLoaded", function () {
  unsorted_array = createRandomArray();
  renderBars(unsorted_array);
});

function renderBars(array) {
  for (let i = 0; i < numOfBars; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * 10 + "px";
    bars_container.appendChild(bar);
  }
}

randomize_array.addEventListener("click", function () {
    unsorted_array=createRandomArray();
    bars_container.innerHTML = ""
    renderBars(unsorted_array)
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          for (let k = 0; k < bars.length; k++) {
            if (k !== j && k !== j + 1) {
              bars[k].style.backgroundColor = "aqua";
            }
          }
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          bars[j].style.height = array[j] * 10 + "px";
          bars[j].style.backgroundColor = "lightgreen";
          bars[j + 1].style.height = array[j + 1] * 10 + "px";
          bars[j + 1].style.backgroundColor = "lightgreen";
          await sleep(100);
        }
      }
      await sleep(100);
    }
    return array;
  }

sort_btn.addEventListener("click", function () {
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
})