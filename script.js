// Configura la fecha límite (ejemplo: 1 año a partir de hoy)
const countdownDate = new Date("Oct 01, 2024 00:00:00").getTime();

// Actualiza el contador cada segundo
const interval = setInterval(function() {

    // Obtiene la fecha y hora actual
    const now = new Date().getTime();

    // Calcula la diferencia entre la fecha límite y la fecha actual
    const distance = countdownDate - now;

    // Calcula días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // Si el contador llega a 0, muestra un mensaje
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "¡Lanzamiento!";
    }
}, 1000);

// Menú hamburguesa
document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});