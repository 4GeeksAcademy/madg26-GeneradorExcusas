import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function ExcusaAleatoria(array) {
  let Aleatorio = Math.floor(Math.random() * array.length);
  return array[Aleatorio]
}
window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let whoRamdon = ExcusaAleatoria(who)
  console.log(whoRamdon);
  let actionRandom = ExcusaAleatoria(action)
  console.log(actionRandom);
  let whatRandom = ExcusaAleatoria(what)
  console.log(whatRandom);
  let whenRandom = ExcusaAleatoria(when)
  console.log(whenRandom);
  document.getElementById("excuse").innerText = whoRamdon + " " + actionRandom + " " + whatRandom + " " + whenRandom;
}
