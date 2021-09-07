    var RandomNumber1 =  Math.floor(Math.random() * 6 + 1) // Numeros Aleatorios del 1 - 6
    var RandomNumber2 =  Math.floor(Math.random() * 6 + 1)

 
    var Dice1 = document.getElementsByClassName("img1")[0]
    Dice1.setAttribute(`src`, `images/dice${RandomNumber1}.png`)

    var Dice2 = document.getElementsByClassName("img2")[0]
    Dice2.setAttribute(`src`, `images/dice${RandomNumber2}.png`)
    
    var WinnerText = document.querySelector("h1")

    if(RandomNumber1>RandomNumber2){
        WinnerText.innerHTML="Player 1 Wins"
    }else if (RandomNumber1 < RandomNumber2){
        WinnerText.innerHTML="Player 2 Wins"
    }else{
        WinnerText.innerHTML="Draw"
    }

        