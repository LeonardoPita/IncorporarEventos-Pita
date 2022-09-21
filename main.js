//Ask the name of the buyer and storre ii into "buyer"
const getName = (name) => {
    name = prompt("Whats your name?");
    if (name != "") {
        return name
    } else {
        alert("Log a valid name");
        getName();
    }
}
let buyer = getName();
let myPurchase = []
let subTotal = 0;
let tax = 1.21;
let total = 0;

const products = [
    { option: 1, name: "T-Shirt", price: 15 },
    { option: 2, name: "Sweater", price: 30 },
    { option: 3, name: "Jacket", price: 90 },
    { option: 4, name: "Shorts", price: 20 },
    { option: 5, name: "Jeans", price: 60 },
    { option: 6, name: "Sandals", price: 40 },
    { option: 7, name: "Shoes", price: 80 },
    { option: 8, name: "Boots", price: 150 }
]


for (const pro of products) {
    let container = document.createElement('div');
    container.innerHTML = `<p>Option ${pro.option} - ${pro.name} - price: $${pro.price}</p>
    <label for="${pro.option}">Add to your basquet</label>
    <button type="button" class="btn" id="${pro.option}">+</button>`;
    document.getElementById('ourProducts').appendChild(container);

    let addToPurchaseButton = document.getElementById(`${pro.option}`);
    addToPurchaseButton.onclick = () => {
        myPurchase.push(`${pro.name}`);
        console.log(`${pro.name}`);
        let addedProducts = document.createElement('span');
        addedProducts.innerHTML = `${pro.name}, `;
        document.getElementById('current').appendChild(addedProducts);
        subTotal += (pro.price);
        totalized();
        total = total.toFixed(2);
    }
}

function totalized() {
    total = (subTotal * tax);
}

const printCurrent = document.getElementById('current');
printCurrent.innerHTML = myPurchase;

let buttonFinalClick = document.getElementById('btnFinal');
buttonFinalClick.onclick = () => {
    let alerted = `Hola ${buyer} you bought ${myPurchase.length} items, which are these:\n ${myPurchase.join(`\n,`)}. \n Whith a subtotal of ${subTotal} and a total of ${total}. \n Thank you for your purchase, we hope to see you soon again!`;
    const printPurchasesTotal = document.getElementById('purchasesTotal');
    printPurchasesTotal.innerHTML = alerted;
};





