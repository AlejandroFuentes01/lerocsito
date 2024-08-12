document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const img = new Image();
    img.onload = function() {
        hero.classList.add('bg-loaded');
    };
    img.src = 'src/background.webp';

    // Countdown logic
    const countdownDate = new Date("Oct 01, 2024 00:00:00").getTime();

    const updateCountdown = function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "¡Lanzamiento!";
        }
    };

    updateCountdown(); // Run once immediately
    const interval = setInterval(updateCountdown, 1000);

    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});