

//DZ-1

const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () => {
    var count = parseInt(counter.textContent);
    count ++;
    counter.textContent = count;
    counter.classList.remove("red");
    counter.classList.add("green");
})

decrementBtn.addEventListener("click", () => {
    var count = parseInt(counter.textContent);
    if (count > 0) {
        count --;
    }
    counter.textContent = count;
    counter.classList.remove("green");
    counter.classList.add("red");
})



//DZ-2


const block = document.getElementById("block");
const coordinates = document.getElementById("coordinates");

block.addEventListener("mousemove", (event) => {
    var x = event.clientX - block.offsetLeft;
    var y = event.clientY - block.offsetTop;
    coordinates.textContent = `${x}, ${y}`;
})



// DZ-3


const trafficLight = document.querySelector('.traffic-light');

const changeColor = function(color, message) {
  const lights = document.querySelectorAll('.light');
  lights.forEach(function(light) {
    light.classList.remove('on');
  });
  const selectedLight = document.querySelector(`.${color}`);
  selectedLight.classList.add('on');
  alert(message);
};

trafficLight.addEventListener('click', function(event) {
  if (event.target.classList.contains('light')) {
    const color = event.target.classList[1];
    if (color === 'red') {
      const message = 'STOP';
      changeColor(color, message);
    } else if (color === 'green') {
      const message = 'GO';
      changeColor(color, message);
    }
  }
});

const input = prompt('Введите цвет');
if (input === 'Красный') {
  const color = 'red';
  const message = 'STOP';
  changeColor(color, message);
} else if (input === 'Зеленый') {
  const color = 'green';
  const message = 'GO';
  changeColor(color, message);
}
