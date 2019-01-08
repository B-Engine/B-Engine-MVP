"use strict";

export function LoadImage(imageSrc) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imageSrc;
  });
}

export function LoadAssets(images) {
  return images.map(async element => await LoadImage(element));
}

export default LoadAssets;
