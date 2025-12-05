const targetDate = new Date("January 16, 2026 00:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} օր  ${hours.toString().padStart(2, '0')} ժամ  ${minutes.toString().padStart(2, '0')} ր  ${seconds.toString().padStart(2, '0')} վ`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Էրիկը տուն է եկել! 🎉";
    }
}, 1000);
