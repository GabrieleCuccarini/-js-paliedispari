const parolaUtente = prompt("Inserisci una parola e ti dirò se è palindroma")
let parolaArray = []

for (let i = 0; i < parolaUtente.length; i++) {
    parolaArray.push(parolaUtente[i])
    console.log(parolaArray)
}

const parolaArrayReversed = parolaArray.reverse()
console.log(parolaArrayReversed)

if (parolaArrayReversed === parolaArray) {
    alert("Figo! La parola è palindroma")
    } else {
    alert("Peccato!La parola non è palindroma")
    }   
