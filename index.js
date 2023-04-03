const apiKey="e23b5d45d194db666eb6addd254e8625";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.getElementById("btn").onclick=function(){
    city = document.getElementById("input").value;
    checkWeather(city);
    }

   
async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data.cod);

    
    if(data.cod=="404"){
        document.getElementById("error").innerHTML = "Please enter a valid city name";//if querysel not working by id
        document.querySelector(".Weather").style.display="none";
        
    }
   
    else{
        // console.log(data);
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"Km/h";
    
    
        WeatherIcon=document.querySelector(".weather-icon");
    
        if(data.weather[0].main=="Clouds"){
            WeatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            WeatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            WeatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            WeatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            WeatherIcon.src="images/mist.png";
        }
        
        document.querySelector(".Weather").style.display="block";
        document.getElementById("error").innerHTML = "";
    
    }
    
}