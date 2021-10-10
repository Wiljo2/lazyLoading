const loadImage = (entry) => {
  const container = entry.target;
  const imagen  = container.querySelector("img");
  const url = imagen.dataset.src ;
  imagen.src = url
  loadedImages++;
  printLog();
  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
  entries
    .filter((elem ) => elem.isIntersecting)
    .forEach(loadImage)
});

export const registerImg = (img) => {
  observer.observe(img)
}