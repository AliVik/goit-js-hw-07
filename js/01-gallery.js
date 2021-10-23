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


function onImgClick(evt) {
    evt.preventDefault();
   
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
    <div class="modal">
     <img src="${evt.target.dataset.source} width="1280" height="720">
    </div>
`, {
        onShow: (instance) => {
        instance.element().querySelector('.modal').onclick = instance.close;
        gallery.addEventListener('keydown', onEscModalClose, {once: true});

            function onEscModalClose(evt) {
                if (evt.key === 'Escape') {
                    instance.close();
                return;
            }  
            }
        
        }
    },
   {
    onClose: (evt) => {
           gallery.removeEventListener('keydown', onEscModalClose, { once: true });
        }
})
   
    instance.show()
    return evt.target.dataset.source;
   
}

// function onEscModalClose(evt) {
//     if (evt.key === 'Escape') {
        
    
//         const instance = basicLightbox.create(
   
//  {
//             onClose: (instance) => {
//               instance.querySelector('.modal') = instance.close;
//             }

//         })
//         console.log(evt.key);
        
//     }
    
// }
