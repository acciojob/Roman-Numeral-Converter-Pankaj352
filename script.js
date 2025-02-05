function convertToRoman(num) {
    if (num <= 0) return "N/A"; // Romans had no numeral for zero or negatives

    const romanSymbols = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    let result = "";
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

function convertAndDisplay() {
    let num = document.getElementById("numberInput").value;
    document.getElementById("result").textContent = convertToRoman(parseInt(num));
}
