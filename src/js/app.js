const allEl = Array.from(document.querySelectorAll('.cell'))

document.addEventListener('DOMContentLoaded', () => {
  const tengu = document.querySelector('.tengu')
  const gameInterval = setInterval(() => {
    let randomCell = Math.floor(Math.random() * allEl.length)
    if (allEl[randomCell].contains(tengu)) {randomCell += 1;}
    const newTenguCell = allEl[randomCell];
    newTenguCell.appendChild(tengu);
  }, 2000)
})

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");
