var userChooseFInal = "";
var userChoose = document.getElementsByClassName("tangan-disable");
var compChoose = document.getElementsByClassName("tangan-disable-comp");
var buttonResult = document.getElementById("text-result")
var userScoreCount = document.getElementById("player_score");
var compScoreCount = document.getElementById("comp_score");
var drawScoreCount = document.getElementById("draw_score");
var refreshButton = document.getElementById("refresh-btn");


var userScore = 0;
var compScore = 0;
var drawScore = 0;
Array.from(userChoose).forEach(function (element) {
    element.addEventListener("click", function () {
        // alert(this.getAttribute("data-item"));
        Array.from(userChoose).forEach(function(el){
            el.classList.remove("active")
        })
        Array.from(compChoose).forEach(function(el){
            el.classList.remove("active")
        })

        // element.classList.remove("active");
        this.classList.add("active")
        userChooseFInal = this.getAttribute("data-item");
        console.log("Pilihan user: ",userChooseFInal);

        compChooseFinal = computerChoose();
        resultFinal = getFinalResult(userChooseFInal, compChooseFinal);
        if(resultFinal === "USER WIN!"){
            userScore = userScore + 1;
            userScoreCount.innerText = userScore;
        }
        if(resultFinal === "COMPUTER WIN!"){
            compScore = compScore + 1;
            compScoreCount.innerText = compScore;
        }
        if(resultFinal === "DRAW"){
            drawScore = drawScore + 1;
            drawScoreCount.innerText = drawScore;
        }
        refreshButton.addEventListener("click", function(){
            userScore = 0;
            compScore = 0;
            drawScore = 0;
            userScoreCount.innerText = userScore;
            compScoreCount.innerText = compScore;
            drawScoreCount.innerText = drawScore;
            Array.from(userChoose).forEach(function(el){
                el.classList.remove("active")
            })
            Array.from(compChoose).forEach(function(el){
                el.classList.remove("active")
            })
        })

        buttonResult.innerHTML = resultFinal;
    })

})

// 2. buat logic pilihan computer random
function computerChoose() {
    var arrayComputerChoose = ["batu", "kertas", "gunting"];
    var randomNumber = Math.floor(Math.random() * 3);
    var compChooseFinal = arrayComputerChoose[randomNumber];
    console.log("Pilihan computer: ", compChooseFinal);
    var elementCompChoose = document.getElementById(`comp-${compChooseFinal}`)
    elementCompChoose.classList.add("active")
    return compChooseFinal;
}


// 3. Logic untuk membandingkan pilihan user versus computer 
function getFinalResult(userChooseFinal, compChooseFinal) {

    var resultFinal = "";
    if (userChooseFInal === "batu" && compChooseFinal === "batu") {
        resultFinal = "DRAW";
        // alert(resultFinal)

    } else if (userChooseFInal === "batu" && compChooseFinal === "gunting") {
        resultFinal = "USER WIN!";
        // alert(resultFinal)

    } else if (userChooseFInal === "batu" && compChooseFinal === "kertas") {
        resultFinal = "COMPUTER WIN!";
        // alert(resultFinal)

    }
    if (userChooseFInal === "kertas" && compChooseFinal === "kertas") {
        resultFinal = "DRAW";
        // alert(resultFinal)

    } else if (userChooseFInal === "kertas" && compChooseFinal === "batu") {
        resultFinal = "USER WIN!";
        // alert(resultFinal)

    } else if (userChooseFInal === "kertas" && compChooseFinal === "gunting") {
        resultFinal = "COMPUTER WIN!";
        // alert(resultFinal)
    }
    if (userChooseFInal === "gunting" && compChooseFinal === "gunting") {
        resultFinal = "DRAW";
        // alert(resultFinal)

    } else if (userChooseFInal === "gunting" && compChooseFinal === "kertas") {
        resultFinal = "USER WIN!";
        // alert(resultFinal)

    } else if (userChooseFInal === "gunting" && compChooseFinal === "batu") {
        resultFinal = "COMPUTER WIN!";
        // alert(resultFinal)
    }
    return resultFinal;
}