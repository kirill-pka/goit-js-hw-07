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

    const isgGalleryImage = e.target.nodeName !== 'IMG';
    // classList.contains('gallery__image')
    if (isgGalleryImage) {
        return;
    }
    
    console.log(e.target.title);
}

// Modal

const instance = basicLightbox.create(`
    <img src="" width="1280" height="auto">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  function onOpenModal(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;

    if (!datasetSource) {
        return;
    } 
    
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }

//   function onCloseBtnClick() {
//     modalRef.classList.remove('is-open');
//     window.removeEventListener('keydown', onEscBtnPress);
//     imageRef.src = '';
//   }
  
  // function onBackdropClick(e) {
  //   if (e.currentTarget === e.target) {
  //   instance.close();
  //   }
  // }

  function onEscKeyPress(e) {
    if (e.code !== 'Escape') {
        return;
    }
    instance.close();
  }




  // const instance = basicLightbox.create(`
  //   <img src="${e.target.dataset.source}" width="1280" height="auto">
  // `);
  // instance.close();

  // galleryRef.addEventListener('keydown', (e) => {
  //   if (e.code !== 'Escape') {
  //     instance.close();
  //   }  
  // });