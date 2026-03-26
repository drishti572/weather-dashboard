// ==========================
// HAMBURGER MENU
// ==========================
document.querySelector(".menu-toggle").onclick = () => {
  document.querySelector(".nav-links").classList.toggle("active");
};


// ==========================
// WEATHER FUNCTION
// ==========================
async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (!city) {
    alert("Please enter city name");
    return;
  }

  result.innerText = "Loading... ⏳";

  const apiKey = "5df54782d736d96c0f73eb72d309e302";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data); // DEBUG

    if (data.cod !== 200) {
      result.innerText = "City not found ❌";
      return;
    }

    const weatherType = data.weather[0].main;
    console.log("Weather Type:", weatherType); // DEBUG

    changeBackgroundVideo(weatherType);

    result.innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
    `;

  } catch (error) {
    console.error("Error:", error);
    result.innerText = "Failed to fetch weather ❌";
  }
}


// ==========================
// BACKGROUND VIDEO CHANGE
// ==========================
function changeBackgroundVideo(weather) {
  const video = document.getElementById("bg-video");
  const source = document.getElementById("video-source");

  let videoFile = "videos/default.mp4";

  switch (weather) {
    case "Clear":
      videoFile = "videos/clear.mp4";
      break;

    case "Clouds":
      videoFile = "videos/clouds.mp4";
      break;

    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      videoFile = "videos/rain.mp4";
      break;

    case "Snow":
      videoFile = "videos/snow.mp4";
      break;

    case "Mist":
    case "Fog":
    case "Haze":
    case "Smoke":
      videoFile = "videos/mist.mp4";
      break;

    default:
      videoFile = "videos/default.mp4";
  }

  console.log("Selected Video:", videoFile); // DEBUG

  // Force video reload
  video.pause();
  source.src = videoFile;
  video.load();
  video.play();
}


// ==========================
// MODALS (LOGIN / SIGNUP)
// ==========================
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// Open modals
document.querySelector(".login").onclick = () => loginModal.style.display = "flex";
document.querySelector(".signup").onclick = () => signupModal.style.display = "flex";

// Close buttons
document.getElementById("loginClose").onclick = () => loginModal.style.display = "none";
document.getElementById("signupClose").onclick = () => signupModal.style.display = "none";

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === signupModal) signupModal.style.display = "none";
};


// ==========================
// LOGIN VALIDATION
// ==========================
function loginUser() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (!user || !pass) {
    alert("Please fill all fields");
    return;
  }

  alert(`Logged in as ${user}`);
  loginModal.style.display = "none";
}


// ==========================
// SIGNUP VALIDATION
// ==========================
function signupUser() {
  const user = document.getElementById("signupUser").value.trim();
  const pass = document.getElementById("signupPass").value.trim();

  if (!user || !pass) {
    alert("Please fill all fields");
    return;
  }

  alert(`Signed up as ${user}`);
  signupModal.style.display = "none";
}
