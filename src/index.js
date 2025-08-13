import "./css/style.css";

import tenguIcon from "./img/goblin.png";

function tenguImage() {
  const tengu = document.createElement('img');
  tengu.classList.add('tengu');
  tengu.src = tenguIcon;
  tengu.alt = "Тенгу";
  return tengu
}

document.body.appendChild(tenguImage());

import "./js/app";
