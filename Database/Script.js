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
            elem.addEventListener("input", (e) => {
                e.target.value = this.masks[field](e.target.value)
            }, false)
        })
        this.Mask();
    }

    SendEvent() {
        const x = document.querySelectorAll(".input-format")
        const formatter = [
            /\D{10,50}/,
            /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]/,
            /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/,
            /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
            /[a-z]{1,10}/,
            /\D{10,40}/,
            /^\([0-9]{2}\)[0-9]{5}\-[0-9]{4}/,
            /^[0-9]{5}\-[0-9]{3}/,
            /(?=.*\d)(?=.*[!-*@¨_+=-])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!-*@¨_+=-]{8,}$)/
        ]
        let theTrue = []

        const sendBtn = document.querySelector("#btn-send");
        const error = document.querySelector("#error")
        sendBtn.addEventListener("click", () => {
            formatter.forEach((e, i) => {
                const y = x[i]
                if (y.value != "" || y.selectedIndex == 0) {
                    y.classList.remove("not-valid")
                    if (e.test(y.value)) {
                        console.log(`${y.value}`);
                        theTrue.push(e.test(y.value));
                    }
                    else if (y == document.querySelector("#gender")) {
                        if (e.test(y.options[y.selectedIndex].text)) {
                            console.log(`${y}`)
                            theTrue.push(e.test(y.options[y.selectedIndex].text))
                        }
                        else {
                            error.innerText = "Preencha todos os campos corretamente!"
                            y.classList.add("not-valid")
                            theTrue = []
                        }
                    }
                    else {
                        error.innerText = "Preencha todos os campos corretamente!"
                        y.classList.add("not-valid")
                        theTrue = []
                    }
                }
                else {
                    error.innerText = "Preencha todos os campos corretamente!"
                    y.classList.add("not-valid")
                    theTrue = []
                }
            })

            if (theTrue.length >= 8) {
                this.Card();
                this.cardName();
                this.CardInfo();
                error.innerText = ""
                theTrue = []
            }
        })
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
        inputName.value = ""
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
                select.selectedIndex = "0"
            }
            else if (i > 3) {
                Info.innerText = `${infoType[i]}: ${this.inputs[i - 1].value}`;
                this.inputs[i - 1].value = ""
            }
            else {
                Info.innerText = `${infoType[i]}: ${this.inputs[i].value}`;
                this.inputs[i].value = ""
            }

        }

    }

    Mask() {

        this.masks = {

            name(value) {
                return value.replace(/\d/g, "")
            },
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
                    .replace(/([3][2-9]\/\d{2}\/|[4-9][0-9]\/\d{2}\/)/, "")
                    .replace(/(\d{2}\/[1][3-9]\/|\d{2}\/[2-9]\d\/)/, "")
                    .replace(/(\d{2}\/\d{2}\/[3-9]|\d{2}\/\d{2}\/[1][1-8])|\d{2}\/\d{2}\/[2][1-9]|\d{2}\/\d{2}\/[2][0][3-9]|\d{2}\/\d{2}\/[2][0][2][3-9]/, "")

            }
        }
    }
}

const Cards = new Card();