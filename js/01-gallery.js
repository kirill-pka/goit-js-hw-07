import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', onGalleryContainerClick)
galleryRef.addEventListener('click', onModal)

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
    
  console.log(e.target);
}

function onModal(e) {
  const datasetSource = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${datasetSource}">`);
  instance.show();
  console.log(datasetSource);

  const closeModal = () => {
    instance.close();
    window.removeEventListener("keydown", handleKeyDown);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
  };
  
  window.addEventListener("keydown", handleKeyDown);
  instance.element().querySelector("img").addEventListener("click", handleImageClick);
}