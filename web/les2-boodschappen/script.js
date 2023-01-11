console.log("script is geladen")

const groentevak = document.getElementById("groente");
const fruitvak = document.getElementById("fruit")

function zetinfruitla(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = "rood";
    fruitvak.appendChild(nieuwElement)
}

function zetingroentenla(groenten){
    console.log(groenten)

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = groenten;
    groentevak.appendChild(nieuwElement)
}