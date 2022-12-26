//Dom Manipulation

const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const display = document.querySelector('.display');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

console.log(forecast);


const updateUI = (data) => {

    const { cityDets, weather } = data;

    //Destructuring property

    // const {cityDets , weather } = data;
    

    //update details template
    details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4 mx-auto">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;
    

  // update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  
  const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};


const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    //object shorthand notation : when the property name and value name are same then only you can write it in this way
    return { cityDets, weather };
}

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get City value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with the new City
    forecast.updateCity(city).then(data => {
        return updateUI(data);
    }).catch(err => {
        console.log(err);
    });

    //Set localStorage 
    localStorage.setItem('city',city);
});


if(localStorage.getItem('city')){
    console.log('a');
    forecast.updateCity(localStorage.getItem('city'))
    .then( data => {
        console.log(data);
        return updateUI(data);
    })
    .catch( err => {
        console.log(err);
    });
}





