class Card {

    constructor() {
        this.secCards = document.querySelector(".Cards-Area");
        this.inputs = document.querySelectorAll(".input-box")
        this.InputsFormatter();
        this.SendEvent();
    }

    InputsFormatter() {
        document.querySelectorAll(".input-edit").forEach((elem) => {
            const field = elem.dataset.js
            console.log(field)
            elem.addEventListener("input", (e) => {
                e.target.value = this.masks[field](e.target.value)
            }, false)
        })
        this.Mask();
    }

    SendEvent() {
        const sendBtn = document.querySelector("#btn-send");
        sendBtn.addEventListener("click", () => {
            this.Card();
            this.cardName();
            this.CardInfo();
        })
    }

    Card() {
        this.card = document.createElement("div");
        this.secCards.appendChild(this.card);
    }

    cardName() { // cria a div do Nome cadastrado.
        const divName = document.createElement("div");
        const name = document.createElement("h2");
        this.card.appendChild(divName);
        divName.appendChild(name);
        const inputName = document.querySelector("#name");
        name.innerText = inputName.value;
    }

    CardInfo() {
        const divInfo = document.createElement("div");
        const select = document.querySelector("#gender");
        const infoType = ["RG", "CPF", "Data Nascimento", "Gênero", "Email", "Cel", "CEP", "Complemento"]
        this.card.appendChild(divInfo);

        for (let i = 0; i <= 7; i++) {
            const Info = document.createElement("span");
            Info.className = "Info"
            divInfo.appendChild(Info);
            if (infoType[3] == infoType[i]) {
                Info.innerText = `${infoType[i]}: ${select.options[select.selectedIndex].text}`;
            }
            else if (i > 3) {
                Info.innerText = `${infoType[i]}: ${this.inputs[i - 1].value}`;
            }
            else {
                Info.innerText = `${infoType[i]}: ${this.inputs[i].value}`;
            }
        }

    }

    Mask() {
        this.masks = {
            rg(value) {
                return value
                    .replace(/\D/g, "")
                    .replace(/(\d{2})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1-$2")
            },
            cpf(value) {
                return value
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                    
            },
            cel(value) {
                return value
                    .replace(/\D/g, "")
                    .replace(/(\d{2})(\d)/, "($1)$2")
                    .replace(/(\d{5})(\d)/, "$1-$2")
            },
            cep(value) {
                return value
                    .replace(/\D/g, "")
                    .replace(/(\d{5})(\d)/, "$1-$2")
            },
            dn(value) {
                    //-----> xx/xx/xxxx
                return value
                    .replace(/\D/g, "")
                    .replace(/(\d{2})(\d)/, "$1/$2")
                    .replace(/(\d{2})(\d)/, "$1/$2")
                    .replace(/([3][2-9]\/\d{2}\/|[4-9][0-9]\/\d{2}\/)/,"")// 
                    .replace(/(\d{2}\/[1][3-9]\/|\d{2}\/[2-9]\d\/)/,"")
                    .replace(/(\d{2}\/\d{2}\/[3-9]|\d{2}\/\d{2}\/[1][1-8])|\d{2}\/\d{2}\/[2][1-9]|\d{2}\/\d{2}\/[2][0][3-9]|\d{2}\/\d{2}\/[2][0][2][3-9]/,"")

                }
        }
    }
}

const Cards = new Card();