// get the weather data from the api
function getWeatherData(city) {
  const apiKey = "76d40968b142375ccee5029f076267e3"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  fetch(url)
  .then(res => res.json())
  .then(res => {
    const cityValue = res.name 
    const tempValue = res.main.temp
    displayWeatherData(cityValue, tempValue)
  })

}

// display the weather data to the page
function displayWeatherData(city, temp) {
  const cityElement = document.querySelector("#cityName")
  const tempElement = document.querySelector("#temp")

  temp += "°c"

  cityElement.textContent = city
  tempElement.textContent = temp

}


// take city input from user
function handleFormSubmit(event) {
  event.preventDefault()
  const city = event.target.city.value 
  if(city) {
    getWeatherData(city)
  }
}

const form = document.querySelector("#form")

form.addEventListener("submit", handleFormSubmit)





