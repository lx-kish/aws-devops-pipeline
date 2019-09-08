var convert = require('../js/converter');
var chai = require('chai');
var assert = chai.assert;

describe('arabic to roman numerals convertion tests', function() 
{
    it('should return a JSON {"value": "I"} when passed "1"', function() 
    {
        var num = "1";
        var expectedResult = JSON.stringify({ "value": "I" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    });
    it('should return a JSON {"value": "XXI"} when passed "21"', function() 
    {
        var num = "21";
        var expectedResult = JSON.stringify({ "value": "XXI" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON {"value": "MMMMCMXLVI"} when passed "4946"', function() 
    {
        var num = "4946";
        var expectedResult = JSON.stringify({ "value": "MMMMCMXLVI" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON {"value": "MMMMMMMMCMXXI"} when passed "8921"', function() 
    {
        var num = "8921";
        var expectedResult = JSON.stringify({ "value": "MMMMMMMMCMXXI" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
});

describe('roman to arabic numerals convertion tests', function() 
{
    it('should return a JSON {"value": 1} when passed "I"', function() 
    {
        var roman = "I";
        var expectedResult = JSON.stringify({ "value": 1 });
        var actualResult = convert(roman);

        assert.equal(expectedResult, actualResult);
    });
    it('should return a JSON {"value": 21} when passed "XXI"', function() 
    {
        var roman = "XXI";
        var expectedResult = JSON.stringify({ "value": 21 });
        var actualResult = convert(roman);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON {"value": 4921} when passed "MMMMCMXXI"', function() 
    {
        var roman = "MMMMCMXXI";
        var expectedResult = JSON.stringify({ "value": 4921 });
        var actualResult = convert(roman);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON {"value": 8946} when passed "MMMMMMMMCMXLVI"', function() 
    {
        var num = "MMMMMMMMCMXLVI";
        var expectedResult = JSON.stringify({ "value": 8946 });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
});

describe('verification of input arabic numerals tests', function() 
{
    it('should return a JSON {"validation": "Input numeral should not be less than 1"} when passed numeral less than 1', function() 
    {
        var num = "0";
        var expectedResult = JSON.stringify({ "validation": "Input numeral should not be less than 1" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON {"validation": "Input numeral should not be less than 1"} when passed numeral less than 1', function() 
    {
        var num = "-1";
        var expectedResult = JSON.stringify({ "validation": "Input numeral should not be less than 1" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
});

describe('verification of input roman numerals tests', function() 
{
    it('should return a JSON { "validation": "Roman Numerals can only be I, V, X, L, C, D or M" } when passed "A"', function() 
    {
        var num = "A";
        var expectedResult = JSON.stringify({ "validation": "Roman Numerals can only be I, V, X, L, C, D or M" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON { "validation": "Roman Numerals can only be I, V, X, L, C, D or M" } when passed "A"', function() 
    {
        var num = "BC";
        var expectedResult = JSON.stringify({ "validation": "Roman Numerals can only be I, V, X, L, C, D or M" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
    it('should return a JSON { "validation": "Roman Numerals can only be I, V, X, L, C, D or M" } when passed "A"', function() 
    {
        var num = "DF";
        var expectedResult = JSON.stringify({ "validation": "Roman Numerals can only be I, V, X, L, C, D or M" });
        var actualResult = convert(num);

        assert.equal(expectedResult, actualResult);
    })
});