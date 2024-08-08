document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000,
        ride: 'carousel'
    });

    carousel.addEventListener('mouseenter', function() {
        carouselInstance.pause();
    });

    carousel.addEventListener('mouseleave', function() {
        carouselInstance.cycle();
    });
});
