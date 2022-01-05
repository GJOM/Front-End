class BankEvents extends InputVal {
    constructor() {
        super();
        this.FormEvents();
    }

    FormEvents() {
        const inputs = document.querySelectorAll("form label input");
        this.sendBtn.addEventListener("click", () => {
            this.theTrue = [];
            this.RegisterValidation()
            this.UserRegisterRepeat();
            if (this.theTrue.length >= 10) {
                this.UserRegister();
                this.Card();
                this.cardName();
                this.CardInfo();
                error.innerText = "";
                inputs.forEach(e=> e.value = "")
            }
        })
    }
}

const bankEvents = new BankEvents();