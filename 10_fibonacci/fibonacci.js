const fibonacci = function(numArg) {
    // 1,1,2,3,5,8

    if (typeof(numArg)!=Number){
        num = parseInt(numArg)
    }
    else {
        num = numArg
    }

    
    if (num <0 ){
        return "OOPS"
    }
    if (num ==0 ){
        return 0
    }

    if (num==1 || num ==2){
        return 1
    }

    fib1=0
    fib2=1

    for (let i = 2; i <= num; i++){
        res=fib1+fib2
        fib1=fib2;
        fib2=res
    }

    return res
};

// Do not edit below this line
module.exports = fibonacci;
