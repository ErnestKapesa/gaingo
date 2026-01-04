// Smooth Page Transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add page-transition class to body for entrance animation
    document.body.classList.add('page-transition');
    
    // Add page loader
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    document.body.appendChild(loader);
    
    // Remove loader after animation
    setTimeout(() => {
        loader.remove();
    }, 600);
    
    // Handle all internal links with transition
    const internalLinks = document.querySelectorAll('a[href^="/"]:not([href^="//"], a[href^="http"], a[href^="https"], a[href^="#"]');
    const relativeLinks = document.querySelectorAll('a[href$=".html"]');
    
    [...internalLinks, ...relativeLinks].forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a hash link
            if (href.startsWith('#')) return;
            
            e.preventDefault();
            
            // Add exit animation
            document.body.classList.remove('page-transition');
            document.body.classList.add('page-exit');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
    
    // Smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animate-on-scroll elements
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
