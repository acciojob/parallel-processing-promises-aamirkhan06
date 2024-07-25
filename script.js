//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


// script.js

const outputDiv = document.getElementById("output");
const downloadButton = document.getElementById("download-images-button");

// Function to download an image
async function downloadImage(image) {
  try {
    const response = await fetch(image.url);
    if (!response.ok) {
      throw new Error(`Failed to load image's URL: ${image.url}`);
    }
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Event listener for button click
downloadButton.addEventListener("click", async () => {
  try {
    const imageUrls = await Promise.all(images.map(downloadImage));
    imageUrls.forEach((imageUrl) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      outputDiv.appendChild(imgElement);
    });
  } catch (error) {
    console.error("Error downloading images:", error.message);
  }
});

