class User extends Card {
    constructor() {
        super()
        this.UserLogin();
        this.error = document.querySelector("#error")
    }
    UserRegister() { // cria o array que armazena os usuários cadastrados.
        this.userAccounts.push(this.userLoginValues);
        console.log(this.userAccounts)
    }

    UserRegisterRepeat() { // se já houver alguma das credenciais registradas, não permitir o cadastro.
        this.theOne = 0;
        this.rEmail = document.querySelector("#email");
        this.rPassword = document.querySelector("#password-register");
        this.rRg = document.querySelector("#rg");
        this.rCpf = document.querySelector("#cpf");
        this.rCel = document.querySelector("#cel");


        this.userLogin = {
            rg: this.rRg,
            cpf: this.rCpf,
            cel: this.rCel,
            email: this.rEmail,
            password: this.rPassword
        };
        this.userLoginValues = {
            rg: this.rRg.value,
            cpf: this.rCpf.value,
            cel: this.rCel.value,
            email: this.rEmail.value,
            password: this.rPassword.value
        };

        if (this.userAccounts == "") { // ok
            this.theTrue.push(true);
        }
        else {
            this.userAccounts.forEach((e) => {
                for (let i in e) {
                    if (e[i] != this.userLoginValues[i]) {
                        this.userLogin[i].classList.remove("not-valid")
                        this.theOne++;

                    }
                    else if (e[i] == this.userLoginValues.password) {
                        this.theOne++;
                    }
                    else {
                        this.userLogin[i].classList.add("not-valid")
                        this.error.innerText = ("Credenciais já cadastradas.")
                    }
                }
            })

            if (this.theOne >= this.userAccounts.length * 5) {
                this.theTrue.push(true); // ok
            }
        }
    }

    UserLogin() { // caso o login e a senha sejam reconhecidos, entrar com o usuário.
        const logName = document.querySelector("#login");
        const logPw = document.querySelector("#password");
        const invalidAcc = document.querySelector("#invalid-acc")
        this.logBtn.addEventListener("click", () => {
            for (let i = 0; i < this.userAccounts.length; i++) {
                if (this.userAccounts[i].email == logName.value && this.userAccounts[i].password == logPw.value) {
                    console.log("nois")
                    document.querySelector("#login-page").classList.add(".display-disappear");
                }
                else {
                    invalidAcc.innerText = "Email ou Senha incorretos."
                    console.log("deu ruim")
                }
                if(this.userAccounts[i].email == "administrator.dev@hotmail.com" && this.userAccounts[i].password == "Devdmin32!"){
                    
                }
            }
        })
    }

}

const login = new User();