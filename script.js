//Unsplash API
const count = 10;
const apiKey = "RYnkyRnjFT192RS26aNbAiAl8xDkz6G6DaRoDcIVl_c";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get random photo from Unsplash API
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    //catch error
  }
}

// On load
getRandomPhoto();
