const timeEl=document.getElementById('time');
const dateEl=document.getElementById('date');
const currentWeatherItemsEl=document.getElementbyId("current-weather-items");
const timeZone=document.getElementbyId('time-zone');
const countryEl=document.getElementById('country');
const weatherForecastEl=document.getElementbyId('weather-forecast');
const currentTempEl=document.getElementbyId('current-temp');

const Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_KEY='3378232ecde9e975edb427f14dd39fc8';


setInterval(()=>{
    const time=new Date();
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour=time.getHours();
    const hoursIn12HoursFormat = hour>=13? hour%12:hour
    const minutes=time.getMinutes();
    const ampm = hourS>=12 ? 'PM' : 'AM';

    timeEl.innerHTML=hoursIn12HoursFormat+':'minutes+' '+`<span id="am-pm">${ampm}</span>`;
    dateEl.innerHTML=days[day] + ',' + date+' '+months[month]
},1000);

function getWeatherData () {
    navigator.geolocation.getCurrentPosition()(success->{
        console.log("success");

        let {latitude,longitude} = success.coords;
    
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res=>res.json()).then(data=>{
            console.log(data);
            showWeatherData(data);
        })
    })
}

function showWeatherData(data){
    let {humidity,pressure,sunrise,sunset,wind-speed}=data.current;
    
    currentWeatherItemsEl.innerHTML=
    `<div class="weather-item">
    <div>Humidity</div>
    <div>${humidity}%</div>
</div>
<div class="weather-item">
    <div>Pressure</div>
    <div>${pressure}</div>
</div>
<div class="weather-item">
    <div>Wind Speed</div>
    <div>${wind_speed}</div>
</div>

<div class="weather-item">
    <div>Sunrise</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
</div>
<div class="weather-item">
    <div>Sunset</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
</div>`
    
    
    
    
    `
}