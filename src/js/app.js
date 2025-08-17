const cellContainer = document.querySelector('.cell-container')
for (let i = 1; i <= 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell')
  cellContainer.append(cell)
}

const allEl = Array.from(document.querySelectorAll('.cell'))

document.addEventListener('DOMContentLoaded', () => {
  const tengu = document.querySelector('.tengu')
  let tenguIndex = 0;
  let randomCell = 0;
  const gameInterval = setInterval(() => {
    do {
      randomCell = Math.floor(Math.random() * allEl.length)
    } while (randomCell == tenguIndex)    
    const newTenguCell = allEl[randomCell];
    tenguIndex = randomCell;
    newTenguCell.append(tengu);
  }, 2000)
})
