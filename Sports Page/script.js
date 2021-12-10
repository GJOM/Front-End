const btnCngMode = document.getElementById("dark-mode-button");
const toggleBox = document.querySelector(".toggle-box");
const background = document.querySelector(".main-area-web");
const textAreaGround = document.querySelector(".sports-desc-area")

toggleBox.addEventListener("click", ChangeMode);

function ChangeMode() {
    if (btnCngMode.className == "toggle-button toggle-button-light") {

        btnCngMode.classList.add("toggle-button-dark")
        btnCngMode.classList.remove("toggle-button-light")
        toggleBox.classList.add("toggle-box-dark")
        toggleBox.classList.remove("toggle-box-light")
        

        document.body.style.backgroundColor = "#191919"
        if(background.className == "main-area-web index-background"){
            background.classList.add("index-background-night")
            background.classList.remove("index-background")
        }
        else if(background.className == "main-area-web aquatic-background"){
            background.classList.add("aquatic-background-night")
            background.classList.remove("aquatic-background")
            document.querySelector(".web-selling-aquatic-items").style.backgroundColor = "#000222"
        }
        else if(background.className == "main-area-web ground-background"){
            background.classList.add("ground-background-night")
            background.classList.remove("ground-background")
            textAreaGround.classList.add("sports-desc-ground-night")
            textAreaGround.classList.remove("sports-desc-ground")
        }
        else if(background.className == "main-area-web aerial-background"){
            background.classList.add("aerial-background-night")
            background.classList.remove("aerial-background")
            textAreaGround.classList.add("sports-desc-aerial-night")
            textAreaGround.classList.remove("sports-desc-aerial")
        }
    }
    else if(btnCngMode.className == "toggle-button toggle-button-dark") {

        btnCngMode.classList.add("toggle-button-light")
        btnCngMode.classList.remove("toggle-button-dark")
        toggleBox.classList.add("toggle-box-light")
        toggleBox.classList.remove("toggle-box-dark")

        document.body.style.backgroundColor = "#fff"
        if(background.className == "main-area-web index-background-night"){
            background.classList.add("index-background")
            background.classList.remove("index-background-night")
        }
        else if(background.className == "main-area-web aquatic-background-night"){
            background.classList.add("aquatic-background")
            background.classList.remove("aquatic-background-night")
            document.querySelector(".web-selling-aquatic-items").style.backgroundColor = "rgb(6, 186, 247)"
        }
        else if(background.className == "main-area-web ground-background-night"){
            background.classList.add("ground-background")
            background.classList.remove("ground-background-night")
            document.querySelector(".web-selling-ground-items").style.backgroundColor = "rgb(6, 186, 247)"
            textAreaGround.classList.add("sports-desc-ground")
            textAreaGround.classList.remove("sports-desc-ground-night")
        }
        else if(background.className == "main-area-web aerial-background-night"){
            background.classList.add("aerial-background")
            background.classList.remove("aerial-background-night")
            textAreaGround.classList.add("sports-desc-aerial")
            textAreaGround.classList.remove("sports-desc-aerial-night")
        }
    }
}

const CurrentLocation = location.href;
const links = document.querySelectorAll("a");
for(let i = 0; i < links.length; i++){
    if(links[i].href === CurrentLocation){
        links[i].className = "active"
    }
}

