class Card{

    constructor() {
        this.secCards = document.querySelector(".Cards-Area");
        this.inputs = document.querySelectorAll(".input-box");
        this.theTrue = [];
        this.loginInfo = document.querySelectorAll(".input-login");
        this.sendBtn = document.querySelector("#btn-send");
        this.userAccounts = [];
    }

    Card() {
        this.card = document.createElement("div");
        this.secCards.appendChild(this.card);
        this.card.className = "card"
    }

    cardName() { // cria a div do Nome cadastrado.
        const divName = document.createElement("div");
        divName.className = "dName"

        const name = document.createElement("h2");
        name.className = "name"

        this.card.appendChild(divName);
        divName.appendChild(name);

        const inputName = document.querySelector("#name");
        name.innerText = inputName.value;
        // inputName.value = ""
    }

    CardInfo() {
        const divInfo = document.createElement("div");
        divInfo.className = "dInfo"

        const select = document.querySelector("#gender");

        const infoType = ["RG", "CPF", "Data Nascimento", "Gênero", "Email", "Cel", "CEP", "Complemento"]
        this.card.appendChild(divInfo);

        for (let i = 0; i <= 7; i++) {

            let Info = document.createElement("span");
            Info.className = "Info"
            divInfo.appendChild(Info);

            if (infoType[3] == infoType[i]) {
                Info.innerText = `${infoType[i]}: ${select.options[select.selectedIndex].text}`;
                // select.selectedIndex = "0"
            }
            else if (i > 3) {
                Info.innerText = `${infoType[i]}: ${this.inputs[i - 1].value}`;
                // this.inputs[i - 1].value = ""
            }
            else {
                Info.innerText = `${infoType[i]}: ${this.inputs[i].value}`;
                // this.inputs[i].value = ""
            }

        }

    }
}

const Cards = new Card();