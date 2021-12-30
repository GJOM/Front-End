class BankEvents extends InputVal {
    constructor() {
        super();
        this.SendEvents();
    }

    SendEvents() {
        this.sendBtn.addEventListener("click", () => {
            this.RegisterValidation()
            if (this.theTrue.length >= 9) {
                this.UserRegister();
                this.Card();
                this.cardName();
                this.CardInfo();
                error.innerText = "";
                this.theTrue = [];
            }
        })
    }
}

const bankEvents = new BankEvents();