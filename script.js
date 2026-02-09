// Artwork data
const artworks = [
    {
        title: 'Never Fight Alone',
        medium: 'Oil on Canvas',
        image: 'https://imgur.com/kZVcO3T'
    },
    {
        title: 'Always Late',
        medium: 'Oil on Canvas',
        image: 'https://imgur.com/HlRfXh3'
    },
    {
        title: 'The Sky and the Void at the same time',
        medium: 'Oil on Canvas',
        image: 'https://imgur.com/3vFyiEn'
    },
    {
        title: 'Plenty of People',
        medium: 'Oil on Canvas',
        image: 'https://imgur.com/14th2CP'
    },
    {
        title: 'Being Alone with Myself',
        medium: 'Oil on Canvas',
        image: 'https://imgur.com/14eghni'
    },
    {
        title: 'Composition I',
        medium: 'Gouache',
        image: 'https://imgur.com/Akpu6Z6'
    },
    {
        title: 'Composition II',
        medium: 'Gouache',
        image: 'https://imgur.com/OicRm7H'
    },
    {
        title: 'Composition III',
        medium: 'Gouache',
        image: 'https://imgur.com/giFjQVD'
    },
    {
        title: 'Composition IV',
        medium: 'Gouache',
        image: 'https://imgur.com/EKS4uaL'
    },
    {
        title: 'Composition V',
        medium: 'Gouache',
        image: 'https://imgur.com/HRtxwhY'
    },
    {
        title: 'Composition VI',
        medium: 'Gouache',
        image: 'https://imgur.com/G2vLXK4'
    },
    {
        title: 'Composition VII',
        medium: 'Gouache',
        image: 'https://imgur.com/XTahlBd'
    },
];

let currentImageIndex = 0;

// Smooth scroll to section
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const medium = document.getElementById('lightbox-medium');
    
    img.src = artworks[index].image;
    img.alt = artworks[index].title;
    title.textContent = artworks[index].title;
    medium.textContent = artworks[index].medium;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % artworks.length;
    updateLightboxImage();
}

// Previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + artworks.length) % artworks.length;
    updateLightboxImage();
}

// Update lightbox image
function updateLightboxImage() {
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const medium = document.getElementById('lightbox-medium');
    
    img.src = artworks[currentImageIndex].image;
    img.alt = artworks[currentImageIndex].title;
    title.textContent = artworks[currentImageIndex].title;
    medium.textContent = artworks[currentImageIndex].medium;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
});
