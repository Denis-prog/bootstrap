import 'normalize.css';
import './index.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

const ourTechnologiesContentVideoLink = document.querySelector('.our-technologies-content-video-link');

ourTechnologiesContentVideoLink.addEventListener('click', () => {
    ourTechnologiesContentVideoLink.classList.add('our-technologies-content-video-link-hidden');
});
