module.exports = convert;

function isNumber(n) {
    return !isNaN(+ n) && isFinite(n);
}

function isRomanNumeral(s) {
    return /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/.test(s);
    // ^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$
}

function inputVerifications(val) {
    var result = '';

    if (isNumber(val)) {
        if (Number(val) < 1) {
            result = JSON.stringify({ "validation": "Input numeral should not be less than 1" });
        } else if (!Number.isInteger(+ val)) {
            result = JSON.stringify({ "validation": "Input numeral should be integer" });
        }
    } else {
        if (!isRomanNumeral(val)) {
            result = JSON.stringify({ "validation": "Roman Numerals can only be I, V, X, L, C, D or M" });
        }
    }
    return result;
}

function convertToRoman(num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}

function convertToArabic(str) {
    var result = 0;
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += decimal[i];
            str = str.replace(roman[i], '');
        }
    }
    return result;
}

function convert(val) {

    var result = inputVerifications(val);

    if (result === '') {
        if (isNumber(val)) {
            result = JSON.stringify({ "value": convertToRoman(+ val) });
        } else {
            result = JSON.stringify({ "value": convertToArabic(val) });
        }
    }

    return result;
}

