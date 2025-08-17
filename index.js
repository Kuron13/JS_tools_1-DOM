import "./src/css/style.css";

import tenguIcon from "./src/img/goblin.png";

function tenguImage() {
  //const tengu = new Image();
  const tengu = document.createElement('img');
  tengu.classList.add('tengu');
  tengu.src = tenguIcon;
  tengu.alt = "Тенгу";
  //document.body.appendChild(tengu)
  console.log(tengu)
  return tengu
}

document.body.appendChild(tenguImage());

import "./src/js/app";
