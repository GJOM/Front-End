class InputVal extends User{
    constructor(){
        super();
        this.InputsFormatter();
        this.Mask();
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

    RegisterValidation() {
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

        const error = document.querySelector("#error")
            formatter.forEach((e, i) => {
                const y = x[i];
                if (y.value != "" || y.selectedIndex == 0) {
                    y.classList.remove("not-valid")
                    if (e.test(y.value)) {
                        this.theTrue.push(e.test(y.value));
                    }
                    else if (y == document.querySelector("#gender")) {
                        if (e.test(y.options[y.selectedIndex].text)) {
                            this.theTrue.push(e.test(y.options[y.selectedIndex].text))
                        }
                        else {
                            error.innerText = "Preencha todos os campos corretamente!";
                            y.classList.add("not-valid");
                            this.theTrue = [];
                        }
                    }
                    else {
                        error.innerText = "Preencha todos os campos corretamente!";
                        y.classList.add("not-valid");
                        this.theTrue = [];
                    }
                }
                else {
                    error.innerText = "Preencha todos os campos corretamente!";
                    y.classList.add("not-valid");
                    this.theTrue = [];
                }
            })
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

const val = new InputVal();