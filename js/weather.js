const API_KEY = "a74d20a06c48d4cfefc8e013886b562b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metirc`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-of-type");
        const city = document.querySelector("#weather span:last-of-type");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);