var ivanHealth = 100;
var peshoHealth = 100;
var peshoPower = 0;
var ivanPower = 0;
var chumaIvan = 1;
var chumaPesho = 1;
var isCawInGame = false;
var ivanNum = (Math.random() * 100) + 1;
var peshoNum = (Math.random() * 100) + 1;

while ((ivanHealth > 0) && (peshoHealth > 0)) {
    if (((ivanNum & (1 << 0)) !== 0) && ((ivanNum & (1 << 3)) !== 0)) {     // (1<<0) <=> 1
        ivanHealth += 8;
        console.log("Ivan poluchi +8 zdrave");
    }

    if (((Math.random() * 100) < 5) && !isCawInGame) {
        ivanHealth = 0;
        isCawInGame = true;
        console.log("Ivan go blisna bik!    Slujebna pobeda za Pesho!");
        break;
    }

    // ivanHealth = (ivanHealth >= peshoPower) ? (ivanHealth - peshoPower) : 0;
    if (ivanHealth > 0) {
        if (((Math.random() * 100) < 5) && chumaIvan === 1) {
            chumaIvan = 2;
            console.log("Ivan hvana chuma!");
        }
        ivanPower = Math.floor((Math.random() * 10) + 1) / chumaIvan;

        if (Math.random() < 0.2) {
            ivanPower *= 2;
            console.log("ivan ima bonus");      //peshoPower<<1;
        }
        console.log("IP: " + ivanPower);
        if (Math.random() < 0.1) {
            console.log("Ivan nameri rakiqta!");
            for (var i = 0; i < 5; i++) {
                peshoHealth -= ivanPower;
            }
        } else {
            peshoHealth -= ivanPower;
        }
    }

    if (((peshoNum & (1 << 0)) !== 0) && ((peshoNum & (1 << 3)) !== 0)) {
        peshoHealth += 8;
        console.log("Pesho poluchi +8 zdrave");

    }
    if (((Math.random() * 100) < 5) && !isCawInGame) {
        peshoHealth = 0;
        isCawInGame = true;
        console.log("Pesho go blisna bik!   Slujebna pobeda za Ivan!");
        break;
    }

    if (ivanHealth > 0) {

        if (((Math.random() * 100) < 5) && chumaPesho === 1) {
            chumaPesho = 2;
            console.log("Pesho hvana chuma!");
        }
        peshoPower = Math.floor((Math.random() * 10) + 1) / chumaPesho;

        if (Math.random() < 0.2) {
            peshoPower *= 2;
            console.log("Pesho ima bonus");
        }
        console.log("PP: " + peshoPower);
        if (Math.random() < 0.1) {
            console.log("Pesho nameri rakiqta!");
            for (var i = 0; i < 5; i++) {
                ivanHealth -= peshoPower;
            }
        } else {
            ivanHealth -= peshoPower;
        }
    }
    console.log("ivan: " + ivanHealth + ", Pesho: " + peshoHealth);
}

if (!isCawInGame) {
    if (ivanHealth <= 0) {
        console.log("Pesho e pobeditel");
    }
    if (peshoHealth <= 0) {
        console.log("Ivan e pobeditel");
    }
}