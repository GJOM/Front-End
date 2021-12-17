class Card{

    constructor(){
        this.secCard = document.querySelector(".Cards-Area");
        this.nameValue = document.querySelector("#name")
        this.dataValues = document.querySelectorAll(".text-input");
        this.DataBaseEvent();
    }

    DataBaseEvent(){
        const submitBtn = document.querySelector("#submit");
        submitBtn.addEventListener("click",()=>{
            this.createDiv();
            this.createSpan();
            this.appendDiv();
            this.createpName();
            this.spanInnerText();
        })
    }

    createDiv(){
        this.card = document.createElement("div");
        this.divName = document.createElement("div");
        this.divData = document.createElement("div");
    }

    createpName(){
        this.pName = document.createElement("h2");
        this.divName.appendChild(this.pName);
        this.pName.innerText = this.nameValue.value
        console.log(this.pName)
    }
   
    createSpan(){
        for(let i = 0; i < 7; i++){
            this.Data = document.createElement("span");
            this.divData.appendChild(this.Data);
            this.Data.className = "Data"
        }
    }
    spanInnerText(){
        const elemType = [ "RG", "CPF", "Data de Nascimento", "Gênero", "Cel", "CEP", "Email"]
        const spans = document.querySelectorAll(".Data");
        const selected = document.querySelector("#Gender-Option");
        for(let i = 0; i < 6; i++){
            spans[i].innerHTML = `${elemType[i]}: ${this.dataValues[i].value}`
            spans[3].innerHTML = `${elemType[3]}: ${selected.options[selected.selectedIndex].value}`
            spans[6].innerHTML = `${elemType[6]} ${this.dataValues[3].value}:`
            console.log(spans[i].innerText)
        }
    }
    
    appendDiv(){
        this.secCard.appendChild(this.card);
        this.card.className = "card";
        this.card.appendChild(this.divName);
        this.divName.className = "divName";
        this.card.appendChild(this.divData);
        this.divData.className = "divData";
    }

  /*  dataValues(){
        this.nameValue = document.querySelector("#name")
        this.rgValue = document.querySelector("#RG-Number")
        this.cpfValue = document.querySelector("#CPF-Number")
        this.birthValue = document.querySelector("#Birth-Date")
        this.celValue = document.querySelector("#Cel-Number")
        this.cepValue = document.querySelector("#CEP-Number")
        this.emailValue = document.querySelector("#Email")

    }
    */


}
let Peoples = new Card()
