function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function inputVerifications() {
    var val = document.getElementById("figure").value;
    //1) integer, greate 0
    //2) Only the letters IVXLCDM, please
    //3) Roman Numerals can only be I, V, X, L, C, D or M
    if (isNumber(val)) {

    } else {

    }
    showMessage(`A test message, mwa-ha-ha-ha!`);
    return true;
}

module.exports = function convert(val) {
    return val;
}