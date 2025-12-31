let input = document.querySelector('.display') ; 

function addnum(n){
    input.value += n ; 
}

function clearAll()
{
    input.value = '' ; 
}

function calculate() {
    let query = input.value ;
    let ans = eval(query) ; 
    input.value = ans  ;
}

function delLast() {
    let x = `${input.value}` ;
    let res = '' ; 
    for(let i = 0 ; i < x.length-1 ; i++)   // ek kam print hogga
    {
        res += x[i] ;
    }

    input.value = res ;
}