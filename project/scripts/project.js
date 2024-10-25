const year = document.querySelector("#year");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function validateForm() {
    let priceArray = JSON.parse(localStorage.getItem("price")) || [];
    let gameArray = JSON.parse(localStorage.getItem("game")) || [];
    let devsArray = JSON.parse(localStorage.getItem("devs")) || [];
    let reasonArray = JSON.parse(localStorage.getItem("reason")) || [];
    let nameArray = JSON.parse(localStorage.getItem("name")) || [];
    let platformArray = JSON.parse(localStorage.getItem("platform")) || [];
    let xbox1Array = JSON.parse(localStorage.getItem("xbox1")) || [];
    let switchArray = JSON.parse(localStorage.getItem("switch")) || [];
    let pcArray = JSON.parse(localStorage.getItem("pc")) || [];
    let ps4Array = JSON.parse(localStorage.getItem("ps4")) || [];
    let ps5Array = JSON.parse(localStorage.getItem("ps5")) || [];

    let valid = document.reviewRequest.switch.checked || document.reviewRequest.pc.checked || document.reviewRequest.ps4.checked || document.reviewRequest.ps5.checked || document.reviewRequest.xbox1.checked
    if (valid == true) {
        if (document.querySelector("#price").value !== "" && document.querySelector("#game").value !== "" && document.querySelector("#devs").value !== "") {
            priceArray.push(document.querySelector("#price").value);
            gameArray.push(document.querySelector("#game").value);
            devsArray.push(document.querySelector("#devs").value);
            reasonArray.push(document.querySelector("#reason").value);
            nameArray.push(document.querySelector("#name").value);
            platformArray.push(document.querySelector("#platform").value);
            xbox1Array.push(document.querySelector("#xbox1").checked);
            switchArray.push(document.querySelector("#switch").checked);
            pcArray.push(document.querySelector("#pc").checked);
            ps4Array.push(document.querySelector("#ps4").checked);
            ps5Array.push(document.querySelector("#ps5").checked);

            localStorage.setItem("price", JSON.stringify(priceArray));
            localStorage.setItem("game", JSON.stringify(gameArray));
            localStorage.setItem("devs", JSON.stringify(devsArray));
            localStorage.setItem("reason", JSON.stringify(reasonArray));
            localStorage.setItem("name", JSON.stringify(nameArray));
            localStorage.setItem("platform", JSON.stringify(platformArray));
            localStorage.setItem("xbox1", JSON.stringify(xbox1Array));
            localStorage.setItem("switch", JSON.stringify(switchArray));
            localStorage.setItem("pc", JSON.stringify(pcArray));
            localStorage.setItem("ps4", JSON.stringify(ps4Array));
            localStorage.setItem("ps5", JSON.stringify(ps5Array));
        }
    }
    else {
        alert("please check at least one checkbox")
    }
}

const games = [
    {
        gameName: "Ori and the Will of the Wisps",
        gamePrice: 29.99,
        developer: "Moon Studios",
        review: "Ori and the Will of the Wisps is the sequel of Ori and the Blind Forest. To fully appreciate the story of this game play Ori and the Blind Forest first. My review: Great story, the music is beautiful. Side quests are both new to this game and amazing. The combat system has more attack options and you get to choose which three abilities to use on the X Y and B buttons (I've only played on the Xbox so I don't know what the default key binds are for the PC). Something I don't really like is the change to the climb ability (they made it harder to drop from overhangs). Even with the changes to the climb ability it's still a five-star game. Ori and the Will of the Wisps is available to play on the PC by using the game distributor Steam.",
        imageUrl:
            "images/ori-wisps-official-cover-art.webp",
        recommended: "",
        consoles: "Xbox One, PC, Nintendo Switch",
        releaseDate: "March 11, 2020"
    },
    {
        gameName: "Ori and the Blind Forest: Definitive Edition",
        gamePrice: 19.99,
        developer: "Moon Studios",
        review: "Ori and the Blind Forest: Definitive Edition adds two new areas and abilities. My review of this game is: Wonderful story, beautiful graphics, amazing music. Perfect use of the Wilhelm Scream. Great characters. Definitely recommend playing this version of the game. Five stars. Ori and the Blind Forest: Definitive Edition is available to play on the PC by using the game distributor Steam.",
        imageUrl:
            "images/ori-blind-forest-definitive-edition-official-cover-art.webp",
        recommended: "",
        consoles: "Xbox One, PC, Nintendo Switch",
        releaseDate: "March 11, 2016"
    },
    {
        gameName: "Horizon Forbidden West",
        gamePrice: 49.99,
        developer: "Guerrilla Games",
        review: "This game is the sequel to Horizon Zero Dawn. This game has major spoilers for Horizon Zero Dawn so please play that first. As for my review of the game: This game does a great job building on the first game. I really enjoyed how wonderful the new swimming mechanics. The story is captivating, the graphics are wonderful, and I would recommend this game to anyone (assuming they finish the first game). Five Stars. Horizon Forbidden West™ Complete Edition is available to play on the PC by using the game distributors Steam and Epic Games.",
        imageUrl:
            "images/horizon-forbidden-west-cover-art.webp",
        recommended: "",
        consoles: "PC, PS4, PS5",
        releaseDate: "February 18, 2022"
    }
];

createGameList(games);

const orignalOrder = document.querySelector('#standard');

orignalOrder.addEventListener("click", () => {
    createGameList(games);
});

const sortByPrice = document.querySelector('#sortPrice');

sortByPrice.addEventListener("click", () => {
    createGameList(games.toSorted((a, b) => a.gamePrice - b.gamePrice));
});

const sortByAlphabet = document.querySelector('#alphabetical');

sortByAlphabet.addEventListener("click", () => {
    createGameList(games
        .toSorted((a, b) => {
            const nameA = a.gameName.toUpperCase();
            const nameB = b.gameName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }));
});

function createGameList(games) {
    if (document.querySelector(".hidden").textContent === "xbox") {
        createXboxList(games);
    }
    else if (document.querySelector(".hidden").textContent === "ps") {
        createPlayStationList(games);
    }
    else if (document.querySelector(".hidden").textContent === "pc") {
        createPCList(games);
    }
    else if (document.querySelector(".hidden").textContent === "ns") {
        createSwitchList(games);
    }
    else {
    }
}

function createXboxList(games) {
    document.querySelector("#games").innerHTML = "";
    games.forEach(game => {
        let playOn = game.consoles;
        if (playOn.includes("Xbox One")) {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let price = document.createElement("p");
            let devs = document.createElement("p");
            let tips = document.createElement("p");
            let img = document.createElement("img");
            let requested = document.createElement("p");
            let devices = document.createElement("p");
            let released = document.createElement("p");

            name.textContent = game.gameName;
            price.textContent = `Price: $${game.gamePrice} USD`
            devs.textContent = `Developed by ${game.developer}`
            tips.textContent = game.review;
            devices.textContent = `Play it on the: ${game.consoles}`;
            released.textContent = `Release Date: ${game.releaseDate}`;
            img.setAttribute("src", game.imageUrl);
            img.setAttribute("alt", `${game.gameName} cover art`);
            img.setAttribute("loading", "lazy");

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(devs);
            card.appendChild(devices);
            card.appendChild(released);
            card.appendChild(tips);
            if (game.recommended !== "") {
                requested.textContent = `Requested by: ${game.recommended}`;
                card.appendChild(requested);
            }
            document.querySelector("#games").appendChild(card);
        }
    })
    document.querySelector("img").removeAttribute("loading", "lazy");
    document.querySelector("img").setAttribute("rel", "preload");
    document.querySelector("img").setAttribute("fetchpriority", "high");
}

function createPlayStationList(games) {
    document.querySelector("#games").innerHTML = "";
    games.forEach(game => {
        let playOn = game.consoles;
        if (playOn.includes("PS")) {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let price = document.createElement("p");
            let devs = document.createElement("p");
            let tips = document.createElement("p");
            let img = document.createElement("img");
            let requested = document.createElement("p");
            let devices = document.createElement("p");
            let released = document.createElement("p");

            name.textContent = game.gameName;
            price.textContent = `Price: $${game.gamePrice} USD`
            devs.textContent = `Developed by ${game.developer}`
            tips.textContent = game.review;
            devices.textContent = `Play it on the: ${game.consoles}`;
            released.textContent = `Release Date: ${game.releaseDate}`;
            img.setAttribute("src", game.imageUrl);
            img.setAttribute("alt", `${game.gameName} cover art`);
            img.setAttribute("loading", "lazy");

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(devs);
            card.appendChild(devices);
            card.appendChild(released);
            card.appendChild(tips);
            if (game.recommended !== "") {
                requested.textContent = `Requested by: ${game.recommended}`;
                card.appendChild(requested);
            }
            document.querySelector("#games").appendChild(card);
        }
    })
    document.querySelector("img").removeAttribute("loading", "lazy");
    document.querySelector("img").setAttribute("rel", "preload");
    document.querySelector("img").setAttribute("fetchpriority", "high");
}

function createPCList(games) {
    document.querySelector("#games").innerHTML = "";
    games.forEach(game => {
        let playOn = game.consoles;
        if (playOn.includes("PC")) {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let price = document.createElement("p");
            let devs = document.createElement("p");
            let tips = document.createElement("p");
            let img = document.createElement("img");
            let requested = document.createElement("p");
            let devices = document.createElement("p");
            let released = document.createElement("p");

            name.textContent = game.gameName;
            price.textContent = `Price: $${game.gamePrice} USD`
            devs.textContent = `Developed by ${game.developer}`
            tips.textContent = game.review;
            devices.textContent = `Play it on the: ${game.consoles}`;
            released.textContent = `Release Date: ${game.releaseDate}`;
            img.setAttribute("src", game.imageUrl);
            img.setAttribute("alt", `${game.gameName} cover art`);
            img.setAttribute("loading", "lazy");

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(devs);
            card.appendChild(devices);
            card.appendChild(released);
            card.appendChild(tips);
            if (game.recommended !== "") {
                requested.textContent = `Requested by: ${game.recommended}`;
                card.appendChild(requested);
            }
            document.querySelector("#games").appendChild(card);
        }
    })
    document.querySelector("img").removeAttribute("loading", "lazy");
    document.querySelector("img").setAttribute("rel", "preload");
    document.querySelector("img").setAttribute("fetchpriority", "high");
}

function createSwitchList(games) {
    document.querySelector("#games").innerHTML = "";
    games.forEach(game => {
        let playOn = game.consoles;
        if (playOn.includes("Nintendo Switch")) {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let price = document.createElement("p");
            let devs = document.createElement("p");
            let tips = document.createElement("p");
            let img = document.createElement("img");
            let requested = document.createElement("p");
            let devices = document.createElement("p");
            let released = document.createElement("p");

            name.textContent = game.gameName;
            price.textContent = `Price: $${game.gamePrice} USD`
            devs.textContent = `Developed by ${game.developer}`
            tips.textContent = game.review;
            devices.textContent = `Play it on the: ${game.consoles}`;
            released.textContent = `Release Date: ${game.releaseDate}`;
            img.setAttribute("src", game.imageUrl);
            img.setAttribute("alt", `${game.gameName} cover art`);
            img.setAttribute("loading", "lazy");

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(devs);
            card.appendChild(devices);
            card.appendChild(released);
            card.appendChild(tips);
            if (game.recommended !== "") {
                requested.textContent = `Requested by: ${game.recommended}`;
                card.appendChild(requested);
            }
            document.querySelector("#games").appendChild(card);
        }
    })
    document.querySelector("img").removeAttribute("loading", "lazy");
    document.querySelector("img").setAttribute("rel", "preload");
    document.querySelector("img").setAttribute("fetchpriority", "high");
}

