import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', onGalleryContainerClick)
galleryRef.addEventListener('click', onOpenModal)

function createGalleryMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>
        `; 
    }).join('');
};

function onGalleryContainerClick(e) {
    e.preventDefault();

    const isGalleryImage = e.target.nodeName !== 'IMG';
    // classList.contains('gallery__image')
    if (isGalleryImage) {
        return;
    }
    
    console.log(e.target.title);
}

  function onOpenModal(e) {
    const datasetSource = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${datasetSource}">`);
    instance.show();

      window.addEventListener("keydown", (e) => {
      if (e.key === "Escape")
      instance.close();
    });
  }
