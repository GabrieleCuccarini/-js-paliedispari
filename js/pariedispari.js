let sceltaUser = prompt ("Scegli: Pari o Dispari?")
console.log(sceltaUser)
const pcNumber = document.getElementById("pc-random-num")
const userNumber = document.querySelector( "[name='num-user']" )
const clickSomma = document.querySelector(".button-somma")
const sommaNumbers = document.getElementById("somma-userpc")

    while (sceltaUser !== "Pari" && sceltaUser !== "Dispari") {
         alert ("Scelta incorretta!");
         sceltaUser = prompt("Scegli un opzione valida: Pari o Dispari")
     } 

    function getRandomNumber ( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
      }

//NUMERO DEL PC
const randomNum = getRandomNumber (1, 5)
console.log(randomNum)
pcNumber.innerHTML = parseInt(randomNum)

console.log(userNumber)
    
clickSomma.addEventListener ("click", function () {    
    if (parseInt(userNumber.value) < 1 || parseInt(userNumber.value) > 5) {
        alert("Il numero scelto non è valido")
    } else {
    sommaCalcoli = parseInt(randomNum) + parseInt(userNumber.value)
    sommaNumbers.innerHTML = sommaCalcoli
        console.log(sommaCalcoli, sceltaUser)
        if (sommaCalcoli % 2 === 0 && sceltaUser === "Pari") {
            alert("Bravo, hai vinto!")
        } else if (sommaCalcoli % 2 === 1 && sceltaUser === "Dispari") {
            alert("Bravo, hai vinto!")
        } else {
            alert("Hai perso!")
        }
    }
})



