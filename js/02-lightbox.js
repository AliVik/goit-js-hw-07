import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.innerHTML = createMarkup(galleryItems);
gallery.addEventListener('click', onImgClick);

function createMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    }).join('');
}


function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
}


new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionPosition: 'bottom',
        captionDelay: '250',
        focus: false,
        
    });

