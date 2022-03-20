import faker from "faker";



const mount = (el) => {
	const cartText = `<div> you have ${faker.random.number()} </div>`;

	el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
	if (document.querySelector("#random-number")) {
		mount(document.querySelector("#random-number"))
	}
}

export {mount};
