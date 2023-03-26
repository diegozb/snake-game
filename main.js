
// const btnChangeBg = document.querySelector('.bg-animation');
//
// btnChangeBg.addEventListener('click', () => {
//   document.body.classList.toggle('background-change');
// });


const btnChangeBg = document.querySelector('.bg-animation');
const colors = ['#ff8c00', '#00bfff', '#9932cc', 'linear-gradient(to right, lightblue, black)']; // array de colores

let colorIndex = 0;

btnChangeBg.addEventListener('click', () => {
  document.body.style.background = colors[colorIndex];
  colorIndex++;
  if (colorIndex === colors.length) {
    colorIndex = 0;
  }
});

console.log("hola")
