const parolaUtente = prompt("Inserisci una parola e ti dirò se è palindroma")
let parolaArray = []

for (let i = 0; i < parolaUtente.length; i++) {
    parolaArray.push(parolaUtente[i])
}

console.log(parolaArray)
const parolaArrayJ = parolaArray.join()
const parolaArrayReversed = parolaArray.reverse().join()
console.log(parolaArrayReversed, parolaArrayJ)

if (parolaArrayReversed === parolaArrayJ) {
    alert("Figo! La parola è palindroma")
    } else {
    alert("Peccato!La parola non è palindroma")
    }   
