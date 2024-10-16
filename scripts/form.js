const year = document.querySelector("#year");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;

const products = [
	{
		id: "fc-1888",
		name: "flux capacitor",
		averagerating: 4.5
	},
	{
		id: "fc-2050",
		name: "power laces",
		averagerating: 4.7
	},
	{
		id: "fs-1987",
		name: "time circuits",
		averagerating: 3.5
	},
	{
		id: "ac-2000",
		name: "low voltage reactor",
		averagerating: 3.9
	},
	{
		id: "jj-1969",
		name: "warp equalizer",
		averagerating: 5.0
	}
];

function createProduct(products) {
	products.forEach(item => {
		let option = document.createElement("option");
		option.setAttribute("value", item.id);
		option.innerHTML = `<span>${item.name}</span>`;
		document.querySelector("select").appendChild(option);
	})
}

createProduct(products);

let numVisits = JSON.parse(localStorage.getItem("numVisits-ls"));

document.getElementById("submit").addEventListener("click", () => {
	numVisits++;
	localStorage.setItem("numVisits-ls", JSON.stringify(numVisits));
});

const visitsDisplay = document.getElementById("visits") || 0;
if (numVisits !== 1) {
	visitsDisplay.textContent = `You have reviewed ${numVisits} products.`;
}
else {
	visitsDisplay.textContent = `You have reviewed your first product.`;
}