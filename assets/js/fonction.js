function min(){
    const args = [...arguments];
    if (args.length == 0)
        return NaN;
    else{
        let mintmp = args[0];
        for(let i in args){
            if (mintmp > args[i])
                mintmp = args[i];
        }
        return mintmp;
    }
}

function max(){
    const args = [...arguments];
    if (args.length == 0)
        return NaN;
    else{
        let maxtmp = args[0];
        for(let i in args){
            if (maxtmp < args[i])
                maxtmp = args[i];
        }
        return maxtmp;
    }
}

function moyenne(){
    const args = [...arguments];
    if (args.length == 0)
        return NaN;
    else{
        let sommetmp = 0;
        for(let i in args){
            sommetmp += args[i];
        }
        return sommetmp/args.length;
    }
}

console.log(min(5, 3, -8, 1, 25, 12));
console.log(min());
console.log(max(5, 3, -8, 1, 25, 12));
console.log(max());
console.log(moyenne(5, 3, -8, 1, 25, 12));
console.log(moyenne ());
