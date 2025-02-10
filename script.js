function convertToRoman(num) {
    const romanNumerals = [
        ['(C)', 100000], ['(L)', 50000], ['(X)', 10000], ['(V)', 5000],
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    
    if (num <=0 || num > 100000) {
        return "Enter a valid number from 0 to 100000";
    }
    

    let result = "";
    for (const [romanSymbol, value] of romanNumerals) {
        while (num >= value) {
            result += romanSymbol;
            num -= value;
        }
    }
    return result;
}

function convertAndDisplay() {
    let num = parseInt(document.getElementById("numberInput").value);
    document.getElementById("result").textContent = convertToRoman(num);
}
