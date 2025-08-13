import tenguIcon from "../img/goblin.png";

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
