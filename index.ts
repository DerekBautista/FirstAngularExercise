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

var names:string[] = []


export const sayHello = (inputName: string) => {
    names.push(inputName)
    displayNames();
}

export const displayNames = () => {
    let list = document.getElementById('myList')

    // removes the content of list array
    if(list){
        while(list.hasChildNodes() && list.firstChild){
            list.removeChild(list.firstChild);
        }
    }
    names.forEach(element => {
        let li = document.createElement('li')
        li.innerText = element
        if(list){
            list.appendChild(li);
        }
    })
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
       if(loc.city.includes(keyword) || loc.country.includes(keyword)){
        filteredLocations.push(loc)
       }
    })

    displayFilteredCity(filteredLocations)
}
