import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionsPosition: 'bottom',
});

export function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({ webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
               <div class="info">
            <p class="info-item">
              <b>Likes</b><br />
              ${likes}
            </p>
            <p class="info-item">
              <b>Views</b><br />
              ${views}
            </p>
            <p class="info-item">
              <b>Comments</b><br />
              ${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b><br />
              ${downloads}
            </p>
          </div>
        </li>
      `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}