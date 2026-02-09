// Artwork data
const artworks = [
    {
        title: 'Composition I',
        medium: 'Oil on Canvas',
        image: 'imagens/IMG_0073.png'
    },
    {
        title: 'Always Late',
        medium: 'Oil on Canvas',
        image: 'imagens/IMG_0102.png'
    },
    {
        title: 'The Sky and the Void at the same time',
        medium: 'Oil on Canvas',
        image: 'imagens/IMG_0090.png'
    },
    {
        title: 'Composition IV',
        medium: 'Oil on Canvas',
        image: 'imagens/IMG_0086.png'
    },
    {
        title: 'Being Alone with Myself',
        medium: 'Oil on Canvas',
        image: 'imagens/IMG_0099.png'
    },
    {
        title: 'Composition I',
        medium: 'Gouache',
        image: 'imagens/Scan_39.png'
    },
    {
        title: 'Composition II',
        medium: 'Gouache',
        image: 'imagens/Scan_6.png'
    },
    {
        title: 'Composition III',
        medium: 'Gouache',
        image: 'imagens/Scan_15.png'
    },
    {
        title: 'Composition IV',
        medium: 'Gouache',
        image: 'imagens/Scan_31.png'
    },
    {
        title: 'Composition V',
        medium: 'Gouache',
        image: 'imagens/Scan_27.png'
    },
    {
        title: 'Composition VI',
        medium: 'Gouache',
        image: 'imagens/Scan_29.png'
    },
    {
        title: 'Composition VII',
        medium: 'Gouache',
        image: 'imagens/Scan_12.png'
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