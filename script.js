// Global Variables
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = "RYnkyRnjFT192RS26aNbAiAl8xDkz6G6DaRoDcIVl_c";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get random photo from Unsplash API
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
  } catch (e) {
    //catch error
  }
}

// On load
getRandomPhoto();
