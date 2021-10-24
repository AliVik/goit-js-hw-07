import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');
const createdMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = createdMarkup;

gallery.addEventListener('click', onImgClick);

    
function createGalleryMarkup(items) {
    return items.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div> `;
    }).join(' ');
}



const instance = basicLightbox.create(`<img class="modal-img" src="">`,
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscClick);
            
        }
    },
    {
        onClose: (instance) => {
            window.addEventListener('keydown', onEscClick);
        }
    }
    
)


function onImgClick(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
        return;
   }
    instance.element().querySelector('.modal-img').src = evt.target.dataset.source;
    

    
    instance.show()
}

function onEscClick(evt) {
         if (evt.key === 'Escape') {
        instance.close();
        return;
        
        }
   
    }
