const key = 'G4ZjPvdgLpmIcUoobst5idc81aO07CXa';


//get City info
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];

}






//get Weather info
const getWeather = async (Locationkey) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const locationKey = `${Locationkey}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + locationKey + query);
    const data = await response.json();

    return data[0];
}

