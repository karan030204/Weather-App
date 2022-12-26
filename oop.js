class Forecast{


    constructor(){
        this.key = 'G4ZjPvdgLpmIcUoobst5idc81aO07CXa';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
    
        //object shorthand notation : when the property name and value name are same then only you can write it in this way
        return { cityDets, weather };
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURL + query);
        const data = await response.json();
        
        return data[0];
    }

    async getWeather(id){
        
        const locationKey = `${id}`;
        const query = `?apikey=${this.key}`;

        const response = await fetch(this.weatherURL + locationKey + query);
        const data = await response.json();

        return data[0];
    }

}



