"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCity = exports.displayFilteredCity = exports.displayCity = exports.displayNames = exports.sayHello = void 0;
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
var names = [];
const sayHello = (inputName) => {
    names.push(inputName);
    (0, exports.displayNames)();
};
exports.sayHello = sayHello;
const displayNames = () => {
    let list = document.getElementById('myList');
    // removes the content of list array
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    names.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayNames = displayNames;
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
        if (loc.city.includes(keyword) || loc.country.includes(keyword)) {
            filteredLocations.push(loc);
        }
    });
    (0, exports.displayFilteredCity)(filteredLocations);
};
exports.searchCity = searchCity;
