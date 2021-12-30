class User extends Card {
    constructor(){
        super()
        this.UserLogin();
    }
    UserRegister(){
        const rEmail = document.querySelector("#email");
        const rPassword = document.querySelector("#password-register");
        
            let userLogin = {
                email: rEmail.value,
                password: rPassword.value
            };
            this.userAccounts.push(userLogin);
            console.log(this.userAccounts)
    }
    
    UserLogin() {
        const logBtn = document.querySelector("#login-btn");
        const logName = document.querySelector("#login");
        const logPw = document.querySelector("#password");
        logBtn.addEventListener("click", () => {
            for(let i = 0; i < this.userAccounts.length; i++){
                if(this.userAccounts[i].email == logName.value && this.userAccounts[i].password == logPw.value){
                console.log("nois")
                }
                else{
                    console.log("deu ruim")
                }
            }
        })
    }

}

const login = new User();