let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temprature = document.getElementById("temprature");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");
let main= document.querySelector("main");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (valueSearch.value != "") {
        searchWeather();
    }

})

let id = "a8e96b51dad383a93f95b9dc68dc19af"
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;

const searchWeather = () => {
    fetch(url + "&q=" + valueSearch.value)
        .then(response =>
            response.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector("figcaption").innerText = data.name;
                temprature.querySelector("img").src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                temprature.querySelector('figcaption span').innerText = Math.round(data.main.temp);
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            }else{
           main.classList.add('error');
           setTimeout( () => { main.classList.remove('error');

           } , 1000);
            }
        valueSearch.value = '';
        })
}

//End//











