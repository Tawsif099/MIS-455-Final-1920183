function searchWeather() {
    const apiKey = "b39bb6e6ce49ae8f06d8fb64659302e8";
    const searchInput = document.getElementById("searchInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const location = data.name + ", " + data.sys.country;
            const temperature = Math.round(data.main.temp - 273.15) + "°C";
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            document.getElementById("location").innerText = "Location: " + location;
            document.getElementById("temperature").innerText = "Temperature: " + temperature;
            document.getElementById("description").innerText = "Description: " + description;
            document.getElementById("weather-icon").src = iconUrl;

            // Display additional information
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById("humidity").innerText = humidity + "%";
            document.getElementById("wind-speed").innerText = windSpeed + " m/s";
        })
        .catch(error => console.error("Error fetching data:", error));
}

