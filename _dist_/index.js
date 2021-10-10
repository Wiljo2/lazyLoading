
import {registerImg} from "./lazy.js"

const url = "https://randomfox.ca/images/";

const max = 120 , min = 1 ;
const randomNumber = () => Math.floor( Math.random() * (max - min)) + min

const createNodeImg = () => {
    
    const img = document.createElement("img");
    img.className = "mx-auto bg-gray-300";
    img.width = "300";
    img.dataset.src = `${url}${randomNumber()}.jpg`;

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "150px";
    imageWrapper.style.display = "inline-block"
    imageWrapper.style.borderRadius = "20px"


    const div = document.createElement("div");
    div.className = "p-5";
    imageWrapper.appendChild(img);    
    div.appendChild(imageWrapper)
    appendedImages++;
    printLog();

    return div
}
const mountNode = document.getElementById("images");

const addImage = () => {
   const newImage = createNodeImg();
   mountNode.append(newImage)
   registerImg(newImage)
}
const removeImages = () => {
   mountNode.innerHTML = ""
}

const addButton = document.getElementById("Add");
const add = () =>  addImage();

const cleanButton = document.getElementById("Clean");

addButton.addEventListener("click", add)

cleanButton.addEventListener("click", removeImages)