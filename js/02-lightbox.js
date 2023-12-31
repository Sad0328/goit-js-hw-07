import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    (acc += `<ul>
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li></ul>`),
  ""
);

galleryContainer.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
