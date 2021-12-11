const btns = document.querySelectorAll("button")
const btnsColor = document.querySelectorAll(".bcolor")
const BankScreen = document.querySelector("section")
const divNBox = document.getElementById("NumberValue")
const NumberBox = document.createElement("input")
const Led = document.querySelector(".show-number")
const submitButton = document.createElement("input")
submitButton.type = "button"
submitButton.value = "OK"
NumberBox.type = "number"
NumberBox.className = "Box-value"


for (let i = 0; i < btns.length; i++) { // botar cor
            btns[i].addEventListener("mouseenter", () => {
                btnsColor[i].style.height = "38px"
            })
        }
        for (let i = 0; i < btns.length; i++) { //tirar cor
            btns[i].addEventListener("mouseleave", () => {
                btnsColor[i].style.height = "0px"
            })
        }
        for (let i = 0; i < btns.length; i++) { //manter cor
            btns[i].addEventListener("click", () => {
                if (btns[i].className != "active") {
                    btns[i].classList.add("active")
                    for (let j = 0; j < btns.length; j++) {
                        if (btns[i] != btns[j]) {
                            btns[j].classList.remove("active")
                        }
                    }
                }
                else {
                    btns[i].classList.remove("active");
                }
            })
        }

        for (let i = 0; i < btns.length; i++) { // Funções banco
            btns[i].addEventListener("click", () => {
                if (btns[0].className == "active") { // Saque
                    NumberBox.placeholder = "Saque"
                    divNBox.appendChild(NumberBox);
                    divNBox.appendChild(submitButton);
                    NumberBox.id = "Withdraw"
                    Led.innerHTML = ""
                    submitButton.addEventListener("click", Loot)
                    function Loot() {
                        if (parseInt(NumberBox.value) > x.SaldView()) {
                            Led.innerHTML = "Valor supera o Saldo"

                        }
                        else if (parseInt(NumberBox.value) <= 0){
                            Led.innerHTML = "Valor inválido"

                        }

                        else if (parseInt(NumberBox.value) > 0) {
                            x.Withdraw(parseInt(NumberBox.value))
                            Led.innerHTML = `Foi Sacado ${NumberBox.value} R$`

                        }
                        NumberBox.value = ""
                        btns[0].classList.remove("active")
                            submitButton.remove()
                            NumberBox.remove()
                            submitButton.removeEventListener("click", Loot)
                    }
                }

                else if (btns[1].className == "active") {//Depósito
                    NumberBox.placeholder = "Depósito"
                    divNBox.appendChild(NumberBox);
                    divNBox.appendChild(submitButton);
                    NumberBox.id = "Deposit"
                    Led.innerHTML = ""
                    submitButton.addEventListener("click", Depot)
                    function Depot() {
                        if (parseInt(NumberBox.value) > 0){
                        x.Deposit(parseInt(NumberBox.value))
                        Led.innerHTML = `Foi Depositado ${NumberBox.value} R$`
                        }
                        else if (parseInt(NumberBox.value) <= 0){
                            Led.innerHTML = "Valor Inválido"
                        }

                        btns[1].classList.remove("active")
                        submitButton.remove()
                        NumberBox.remove()
                        submitButton.removeEventListener("click", Depot)
                    }
                }

                else if (btns[2].className == "active") {
                    Led.innerHTML = `Seu Saldo é de: ${x.SaldView()}R$`
                    submitButton.remove()
                    NumberBox.remove()
                }
                else if (btns[3].className == "active") {
                    Led.innerHTML = `Seu limite no cartão é de: ${x.Limit()}R$`
                    submitButton.remove()
                    NumberBox.remove()
                }
                else {
                    submitButton.remove()
                    NumberBox.remove()
                    Led.innerHTML = ""
                }
            })
        }

        class BankAccount {
            constructor() {
                this.countAccount = 2412835
                this.Password
                this.sald = 0
                this.limit = 1500
            }

            Deposit(DepValue) {
                this.sald += DepValue
            }

            Withdraw(WithdrawValue) {
                this.sald -= WithdrawValue
            }

            SaldView(ValueView) {
                return this.sald
            }

            Limit(LimitVerify) {
                return this.limit
            }
        }
        let x = new BankAccount()
