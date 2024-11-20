
        const apiid = "d0dd0606736360299d9cd711eb566bca";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const what = document.querySelector(".weather_icon")



        async function checkweather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiid}`);
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity; + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "KM/H";

            if(data.weather[0].main == "Rain"){
                what.src ="https://lottie.host/embed/3c0e7675-7464-4a21-91d4-b1b20fa6621e/BPD6XSDhjs.json";
            }
            else if(data.weather[0].main == "Clouds"){
                what.src = "https://lottie.host/embed/ce80eeae-bda3-448a-8b26-a2d10ff17d6b/flY56dZxDX.json";
            }
            else if(data.weather[0].main == "Drizzle"){
                what.src ="https://lottie.host/embed/ce80eeae-bda3-448a-8b26-a2d10ff17d6b/flY56dZxDX.json";
            }
            else if(data.weather[0].main == "Mist"){
                what.src = "https://lottie.host/embed/659bd572-2ef3-48a3-bfae-a6d6e750ab36/2BxcfoTEhW.json"

            }
            else if(data.weather[0].main == "Clear"){
                what.src = "https://lottie.host/embed/4d5fe702-3d33-4ad0-867e-28333cf152c4/g3NbPhNSaV.json"
            }

            
        }

        searchbtn.addEventListener("click" , ()=>{
            checkweather(searchbox.value);
        })
        
 