'use strict'

/**
 * @param {string} imageSrc
 * @returns {Promise<HTMLImageElement>}
 */
export function LoadImage(imageSrc) {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = imageSrc
    })
}
/**
 * @param {{ map: (images: (element: string) => PromiseLike<HTMLImageElement>) => HTMLImageElement[]; }} images
 * @returns {HTMLImageElement[]}
 */
export function LoadImages(images) {
    return images.map(element => LoadImage(element))
}

export default LoadImages
