// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email') || 'Көрсетілмеген';
        const age = formData.get('age');
        
        // Create WhatsApp message
        const message = `Сәлеметсіз бе! Мен Erke балабақшасына қызығушылық танытып отырмын.

Менің атым: ${name}
Телефон: ${phone}
Email: ${email}
Баланың жасы: ${age}

Экскурсияға жазылғым келеді. Қашан келуге болады?`;
        
        // WhatsApp phone number
        const whatsappNumber = '77075642469';
        
        // Generate WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Show success message after a delay
        setTimeout(() => {
            alert('Рахмет! Сіздің өтінішіңіз WhatsApp арқылы жіберілді.');
            contactForm.reset();
        }, 1000);
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Animate advantage cards on hover
const advantageCards = document.querySelectorAll('.advantage-card');
advantageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.advantage-icon').style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.advantage-icon').style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add transition to advantage icons
document.querySelectorAll('.advantage-icon').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

navbar.style.transition = 'transform 0.3s ease';


// Program cards animation
const programCards = document.querySelectorAll('.program-card');
programCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('fade-in-up');
});

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    `;
    
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }
    
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes floatParticle {
            from {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            to {
                transform: translateY(-100vh) translateX(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
}

createParticles();

// Testimonial cards hover effect
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    });
    
    card.style.transition = 'all 0.3s ease';
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group select');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
    
    input.parentElement.style.transition = 'transform 0.2s ease';
});

// Add names to form inputs for proper form handling
document.querySelectorAll('.form-group input, .form-group select').forEach((input, index) => {
    const placeholders = ['name', 'phone', 'email', 'age'];
    if (placeholders[index]) {
        input.setAttribute('name', placeholders[index]);
    }
});

// Mobile touch interactions
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
}

// Add floating action button for mobile
function createFloatingButton() {
    const fab = document.createElement('a');
    fab.href = 'https://wa.me/77075642469?text=' + encodeURIComponent('Сәлеметсіз бе! Мен Erke балабақшасы туралы сұрағым келеді.');
    fab.target = '_blank';
    fab.className = 'floating-action-btn';
    fab.innerHTML = '<i class="fab fa-whatsapp"></i>';
    fab.title = 'WhatsApp арқылы хабарласу';
    document.body.appendChild(fab);
}

// Show WhatsApp button on all devices
createFloatingButton();

// Improved scroll performance for mobile
let ticking = false;
function updateScrollEffects() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            
            // Parallax effect for hero
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateScrollEffects, { passive: true });

// Interactive counters for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.dataset.target);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Touch feedback for buttons
document.querySelectorAll('.btn, .program-card, .about-card').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    element.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
});

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

// Observe all lazy images
document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
});

// Gallery Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    
const galleryData = {
    'computer-class': [
        { src: 'images/gallery/computer-class/depositphotos_159784652-stock-photo-children-computer-class-us-for.jpg', caption: 'Компьютерлік сынып' },
        { src: 'images/gallery/computer-class/iaa7ykubhfa4lmnm1daitgxeqmd756vt.jpg', caption: 'Бағдарламалау сабағы' },
        { src: 'images/gallery/computer-class/unnamed.jpg', caption: 'Компьютермен жұмыс' },
        { src: 'images/gallery/computer-class/what-is-computer-programming-blog-header.png', caption: 'Кодтау негіздері' }
    ],
    'robots': [
        { src: 'images/gallery/robots/robotech.jpg', caption: 'Робототехника сабағы' },
        { src: 'images/gallery/robots/malchik-i-robot.jpg', caption: 'Робот достар' },
        { src: 'images/gallery/robots/123-1024x683.jpg', caption: 'Роботтарды құрастыру' },
        { src: 'images/gallery/robots/1hvdyx2g20odgz37iaq9mbcjswkrtfgw.webp', caption: 'Робот жарыстары' }
    ],
    'playground': [
        { src: 'images/gallery/playground/6b33e6c9-c9c1-4761-b658-a4512b816360.png', caption: 'Ойын аймағы' },
        { src: 'images/gallery/playground/0c74008f-f08c-4c99-ac7b-15ff41a0ba85.png', caption: 'Сергіту сәті' },
        { src: 'images/gallery/playground/5418104b-9ff2-481a-9b22-d4a05e626e3f.png', caption: 'Белсенді ойындар' },
        { src: 'images/gallery/playground/cf5a6e17-5fa1-476a-ace4-aae44fd9eeec.png', caption: 'Серуенде' }
    ],
    'teamwork': [
        { src: 'images/gallery/teamwork/steam-16.jpeg', caption: 'Топтық жұмыс' },
        { src: 'images/gallery/teamwork/d-learn.jpg', caption: 'Бірге оқимыз' }
    ],
    '3dmodeling': [
        { src: 'images/gallery/3dmodeling/preview-blog-35-01.jpg', caption: '3D модельдеу' },
        { src: 'images/gallery/3dmodeling/kindergarten_preview.jpg', caption: '3D жобалар' },
        { src: 'images/gallery/3dmodeling/01.jpg', caption: '3D принтер' }
    ],
    'events': [
        { src: 'images/gallery/events/One_Note_Cape_Kids.jpg', caption: 'Мерекелік шаралар' },
        { src: 'images/gallery/events/photo_2024-08-06_21-25-19.jpg', caption: 'Концерт' },
        { src: 'images/gallery/events/16485.png', caption: 'Байқаулар' }
    ]
};

let currentCategory = '';
let currentImageIndex = 0;
let currentImages = [];

const modal = document.getElementById('galleryModal');
const carouselImage = document.getElementById('carouselImage');
const carouselCaption = document.getElementById('carouselCaption');
const carouselIndicators = document.getElementById('carouselIndicators');
const closeModal = document.querySelector('.gallery-modal-close');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

// Function to update carousel
function updateCarousel() {
    const image = currentImages[currentImageIndex];
    console.log('Updating carousel:', currentCategory, currentImageIndex, image.src);
    
    // Force image reload to avoid caching issues
    carouselImage.src = '';
    setTimeout(() => {
        carouselImage.src = image.src;
        carouselCaption.textContent = image.caption;
    }, 10);
    
    // Update indicators
    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImageIndex);
    });
}

// Function to show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateCarousel();
}

// Function to show previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateCarousel();
}

// Add click event to all gallery categories
document.querySelectorAll('.gallery-category').forEach(category => {
    category.addEventListener('click', function() {
        console.log('Gallery category clicked:', this.dataset.category);
        currentCategory = this.dataset.category;
        currentImages = galleryData[currentCategory] || [];
        currentImageIndex = 0;
        
        console.log('Images found:', currentImages.length);
        console.log('Image paths:', currentImages.map(img => img.src));
        
        if (currentImages.length > 0) {
            // Reset carousel image
            carouselImage.src = '';
            carouselCaption.textContent = '';
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Create indicators
            carouselIndicators.innerHTML = '';
            currentImages.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'carousel-indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => {
                    currentImageIndex = index;
                    updateCarousel();
                });
                carouselIndicators.appendChild(indicator);
            });
            
            // Update carousel after a short delay to ensure modal is visible
            setTimeout(() => {
                updateCarousel();
            }, 100);
        }
    });
});

// Navigation buttons
if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
if (nextBtn) nextBtn.addEventListener('click', showNextImage);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Touch swipe support for mobile carousel
let carouselTouchStartX = null;
if (carouselImage) {
    carouselImage.addEventListener('touchstart', e => {
        carouselTouchStartX = e.touches[0].clientX;
    });

    carouselImage.addEventListener('touchend', e => {
        if (!carouselTouchStartX) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const diff = carouselTouchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                showNextImage();
            } else {
                showPrevImage();
            }
        }
        
        carouselTouchStartX = null;
    });
}

// Close modal when clicking on X
closeModal.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the carousel
modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

}); // End of DOMContentLoaded

// Dynamic theme based on time
const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
    document.documentElement.style.setProperty('--bg-light', '#f0f0f0');
}