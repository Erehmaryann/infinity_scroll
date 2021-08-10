// Global Variables
const imageContainer = document.getElementById("imageContainer");
const loader = document.getElementById("loader");

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = "RYnkyRnjFT192RS26aNbAiAl8xDkz6G6DaRoDcIVl_c";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for links and photos, Add to DOM
function displayPhotos() {
  // Run function for each obj in photosArray
  photosArray.forEach((photo) => {
    // Create a link to unsplash
    const link = document.createElement("a");
    link.setAttribute("href", photo.links.html);
    link.target = "_blank";
    // Create an image tag to hold the image
    const image = document.createElement("img");
    image.src = photo.urls.regular;
    image.setAttribute("alt", photo.alt_description);
    image.title = photo.alt_description;
    // Put image into link, and then put both into the imageContainer
    link.appendChild(image);
    imageContainer.appendChild(link);
  });
}
// Get random photo from Unsplash API
async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (e) {
    //catch error
  }
}

// On load
getRandomPhoto();
