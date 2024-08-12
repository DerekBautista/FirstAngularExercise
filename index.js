"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeString = exports.isValidCode = exports.validateISBN = exports.searchCity = exports.displayFilteredCity = exports.displayCity = void 0;
class Location {
    constructor(city, country, population) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
    toString() {
        return `City: ${this.city}\n
        Country: ${this.country}\n
        Population: ${this.population}\n\n`;
    }
}
let locations = [];
const displayCity = (cityName, countryName, population) => {
    locations.push(new Location(cityName, countryName, population));
    let list = document.getElementById('city-list');
    // removes the content of list array
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    locations.forEach(loc => {
        let li = document.createElement('li');
        li.innerText = loc.toString();
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayCity = displayCity;
const displayFilteredCity = (filteredLocations) => {
    let list = document.getElementById('city-list');
    // removes the content of list array
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    filteredLocations.forEach(loc => {
        let li = document.createElement('li');
        li.innerText = loc.toString();
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayFilteredCity = displayFilteredCity;
const searchCity = (keyword) => {
    let filteredLocations = [];
    locations.forEach(loc => {
        if (loc.city.toLowerCase().includes(keyword) || loc.country.toLowerCase().includes(keyword)) {
            filteredLocations.push(loc);
        }
    });
    (0, exports.displayFilteredCity)(filteredLocations);
};
exports.searchCity = searchCity;
const validateISBN = (code) => {
    console.log(`${code} -> ${(0, exports.isValidCode)(code)}`);
};
exports.validateISBN = validateISBN;
const isValidCode = (code) => {
    let i = 1;
    let isbnValue = 0;
    let cValue = 0;
    for (let c of code) {
        if (c === 'X') {
            if (i != 10)
                return false;
            cValue = 10;
        }
        else {
            cValue = +c;
        }
        isbnValue += cValue * i;
        i++;
    }
    if (isbnValue % 11 != 0)
        return false;
    return true;
};
exports.isValidCode = isValidCode;
const changeString = (word) => {
    word = word.toLowerCase();
    console.log(word);
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let ascii = word.charCodeAt(i);
        if (ascii === 122) {
            newWord += String.fromCharCode(65); // convert z to A
        }
        else if (ascii >= 97 && ascii <= 121) {
            let newChar = String.fromCharCode(ascii + 1); //move to the next char
            if (isVowel(newChar)) {
                newWord += newChar.toUpperCase(); //uppercase the char if it is a vowel
            }
            else {
                newWord += newChar; //concat consonant
            }
        }
        else {
            newWord += word.charAt(i);
        }
    }
    console.log(newWord);
    displayStringResult(newWord);
};
exports.changeString = changeString;
function displayStringResult(resultText) {
    let resultBox = document.getElementById('string-result');
    let result = document.createElement('div');
    result.textContent = resultText;
    // removes the content of list array
    if (resultBox) {
        resultBox.appendChild(result);
    }
}
function isVowel(c) {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u")
        return true;
    return false;
}
