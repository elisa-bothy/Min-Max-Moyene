const args = [...arguments];
function min(){
    if (args == NaN)
        return afficher("Veuillez entrer des nombres");
    else{
        let mintmp = args[0];
        for(let i in args){
            if (mintmp < args[i])
                mintmp = args[i];
        }
    return mintmp;
    }
}

console.log(min(5, 3, -8, 1, 25, 12));
console.log(min());
