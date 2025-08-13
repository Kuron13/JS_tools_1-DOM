import tenguIcon from "../img/goblin.png";

// comment this to pass build
//const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}
console.log("app.js included");

const allEl = Array.from(document.querySelectorAll('.cell'))

const tengu = document.createElement('img');
tengu.classList.add('tengu')
tengu.src = tenguIcon;
tengu.alt = "Тенгу";

document.addEventListener('DOMContentLoaded', () => {
  const gameInterval = setInterval(() => {
    let randomCell = Math.floor(Math.random() * allEl.length)
    if (allEl[randomCell].contains(tengu)) {randomCell += 1;}
    const newTenguCell = allEl[randomCell];
    newTenguCell.appendChild(tengu);
  }, 2000)
})
