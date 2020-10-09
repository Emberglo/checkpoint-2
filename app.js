let plutonium = 1000;
let click = 1;
let multiplier = 1
let plutPerSec = 0

let clickUpgrades = {
    pickaxe: {
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    hovercraft: {
        price: 250,
        quantity: 0,
        multiplier: 3
    }
}

let automaticUpgrades = {
    plutonian: {
        price: 500,
        quantity: 0,
        multiplier: 10
    },
    drill: {
        price: 1000,
        quantity: 0,
        multiplier: 20
    }
}

function update() {
    document.getElementById('plutonium').innerText = plutonium
    multiplierCounter();
    plutoniumPerSecond()
}

function mine() {
    plutonium += click;
    // document.getElementById('mm').innerText = multiplier
    // document.getElementById('pps').innerText = plutPerSec
    update();
}

function multiplierCounter() {
    document.getElementById('mm').innerText = Math.floor(
        (clickUpgrades.pickaxe.quantity * clickUpgrades.pickaxe.multiplier)+
        (clickUpgrades.hovercraft.quantity * clickUpgrades.hovercraft.multiplier) +
        (automaticUpgrades.plutonian.quantity * automaticUpgrades.plutonian.multiplier) +
        (automaticUpgrades.drill.quantity * automaticUpgrades.drill.multiplier)
    )
}

function plutoniumPerSecond() {
    document.getElementById('pps').innerText = Math.floor(
        ((automaticUpgrades.plutonian.quantity * automaticUpgrades.plutonian.multiplier) +
        (automaticUpgrades.drill.quantity * automaticUpgrades.drill.multiplier)) / 3
    )
}

function buyPickaxe() {
    if (plutonium >= clickUpgrades.pickaxe.price) {
        clickUpgrades.pickaxe.quantity++;
        document.getElementById('pickaxes').innerText = clickUpgrades.pickaxe.quantity
        plutonium -= clickUpgrades.pickaxe.price;
        clickUpgrades.pickaxe.price *= 2
        document.getElementById('pickaxeCost').innerText = clickUpgrades.pickaxe.price
        click += clickUpgrades.pickaxe.multiplier
    }
    update()
}

function buyHovercraft() {
    if (plutonium >= clickUpgrades.hovercraft.price) {
        clickUpgrades.hovercraft.quantity++;
        document.getElementById('hovercraft').innerText = clickUpgrades.hovercraft.quantity
        plutonium -= clickUpgrades.hovercraft.price;
        clickUpgrades.hovercraft.price *= 2
        document.getElementById('hovercraftCost').innerText = clickUpgrades.hovercraft.price
        click += clickUpgrades.hovercraft.multiplier
    }
    update()
}

function buyPlutonian() {
    if (plutonium >= automaticUpgrades.plutonian.price) {
        automaticUpgrades.plutonian.quantity++;
        document.getElementById('plutonian').innerText = automaticUpgrades.plutonian.quantity
        plutonium -= automaticUpgrades.plutonian.price;
        automaticUpgrades.plutonian.price *= 2
        document.getElementById('plutonianCost').innerText = automaticUpgrades.plutonian.price
    }
    update()
}

function buyDrill() {
    if (plutonium >= automaticUpgrades.drill.price) {
        automaticUpgrades.drill.quantity++;
        document.getElementById('drill').innerText = automaticUpgrades.drill.quantity
        plutonium -= automaticUpgrades.drill.price;
        automaticUpgrades.drill.price *= 2
        document.getElementById('drillCost').innerText = automaticUpgrades.drill.price
    }
    update()
}

function collectAutoUpgrades() {
    for (const upgrade in automaticUpgrades) {
        plutonium += (automaticUpgrades[upgrade].quantity * automaticUpgrades[upgrade].multiplier)
    }
    update()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000)
}

startInterval();
update();