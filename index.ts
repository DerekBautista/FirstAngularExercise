class Location{
    city:string
    country:string
    population:number

    constructor(city:string, country:string, population:number){
        this.city = city
        this.country = country
        this.population = population
    }

    toString(){
        return `City: ${this.city}\n
        Country: ${this.country}\n
        Population: ${this.population}\n\n`;
    }

}

let locations:Location[] = []

export const displayCity = (cityName:string, countryName:string, population:number) => {
    locations.push(new Location(cityName, countryName, population))

    let list = document.getElementById('city-list')

    // removes the content of list array
    if(list){
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild);
        }
    }

    locations.forEach(loc => {
        let li = document.createElement('li')
        li.innerText = loc.toString()
        if(list){
            list.appendChild(li);
        }
    })
}

export const displayFilteredCity = (filteredLocations:Location[]) => {
    let list = document.getElementById('city-list')

    // removes the content of list array
    if(list){
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild);
        }
    }

    filteredLocations.forEach(loc => {
        let li = document.createElement('li')
        li.innerText = loc.toString()
        if(list){
            list.appendChild(li);
        }
    })
}

export const searchCity = (keyword:string) => {
    let filteredLocations:Location[] = []

    locations.forEach(loc => {
       if(loc.city.toLowerCase().includes(keyword) || loc.country.toLowerCase().includes(keyword)){
        filteredLocations.push(loc)
       }
    })

    displayFilteredCity(filteredLocations)
}

export const validateISBN = (code:string) => {
    console.log(`${code} -> ${isValidCode(code)}`)
}

export const isValidCode = (code:string) =>{
    let i = 1
    let isbnValue = 0
    let cValue = 0

    for(let c of code){
        if(c === 'X'){
            if(i != 10)
                return false;
            cValue = 10
        }
        else{
            cValue = +c
        }
        isbnValue += cValue*i
        i++
    }

    if(isbnValue%11 != 0)
        return false
    return true
}

export const changeString = (word:String) => {
    word = word.toLowerCase()
    console.log(word)
    let newWord:string = "";
    for(let i = 0; i < word.length; i++){
        let ascii = word.charCodeAt(i)

        if(ascii === 122){
            newWord += String.fromCharCode(65) // convert z to A
        }
        else if (ascii >= 97 && ascii <= 121){
            let newChar = String.fromCharCode(ascii+1) //move to the next char
            if(isVowel(newChar)){
                newWord += newChar.toUpperCase()//uppercase the char if it is a vowel
            }
            else{
                newWord += newChar//concat consonant
            }
        }
        else{
            newWord += word.charAt(i)
        }
    }

    console.log(newWord)
    displayStringResult(newWord)
}


function displayStringResult (resultText:string){
    let resultBox = document.getElementById('string-result')
    let result = document.createElement('div')
    result.textContent = resultText
    // removes the content of list array
    if(resultBox){
        resultBox.appendChild(result);
    }
}

function isVowel (c:string){
    if(c === "a" || c === "e" || c ==="i" || c ==="o" || c === "u")
        return true
    return false
}