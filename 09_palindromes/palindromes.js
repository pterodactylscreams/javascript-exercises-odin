const palindromes = function (st1) {
    const allowed= "abcdefghijklmnopqrstuvwxyz1234567890"
    
    const cleanst= st1
                    .toLowerCase()
                    .split("")
                    .filter((chara) => allowed.includes(chara))
                    .join("")

                    // return cleanst

                    const reversest=cleanst.split("").reverse().join("")

                    return reversest==cleanst
};

// Do not edit below this line
module.exports = palindromes;