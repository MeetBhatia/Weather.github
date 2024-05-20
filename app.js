const API_KEY = `37ec9b2c633ec015305d071b8dc8b696`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);  
    const data = await response.json()
    return showWeather(data)
    
}

function cha(){
    
    let a=document.getElementById("search").value

  if(a==""){
   
    weather.innerHTML=""
  }

}


function erase(){
document.getElementById("search").value=""
    weather.innerHTML=""
 }


const showWeather = (data) => {

    if (data.cod == "400") {
        weather.innerHTML = `<h4> Please Enter A City Name <h4>`
        return;
    }
        
    if (data.cod == "404") {
        weather.innerHTML = `<h4> City Not Found <h4>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h4>${data.main.temp} ℃</h4>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `

}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }

)

