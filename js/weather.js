const API_KEY = "e16b1429e582ee5fd303431831bb4f3d"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  });
}

function onGeoError() {
 alert("위치를 찾을 수 없어요 ㅠㅠ")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


