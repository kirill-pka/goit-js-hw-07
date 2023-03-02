import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', onGalleryContainerClick)

function createGalleryMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `; 
    }).join('');
};

function onGalleryContainerClick(e) {
    e.preventDefault();

    const isgGalleryImage = e.target.nodeName !== 'IMG';
    if (isgGalleryImage) {
        return;
    }
    
    console.log(e.target.title);
}

const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt', captionDelay: 250, 
});