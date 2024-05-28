function somar(a,b){
    if((typeof a != 'number') || (typeof b != 'number')){
    return "Caractere invalido"
    }
        return a+b
    }


module.exports = somar