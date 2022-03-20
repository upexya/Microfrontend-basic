import faker from "faker";

const cartText = `<div> you have ${faker.random.number()} </div>`;

document.querySelector('#random-number').innerHTML = cartText;

