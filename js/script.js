// Smooth Scroll to Top
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Zoom-in animation
document.addEventListener("DOMContentLoaded", function () {
    const zoomElements = document.querySelectorAll(".zoom-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the image is visible

    zoomElements.forEach(el => observer.observe(el));
});

// Emojis brust out interaction
document.getElementById("boomText").addEventListener("click", function (event) {
    const emojis = ["🐶", "🦴", "☕️", "🍰", "💕"]; // Emoji choices
    for (let i = 0; i < 15; i++) {
        let emoji = document.createElement("span");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.classList.add("emoji");

        // Set position near the clicked word
        let x = (Math.random() - 0.5) * 500 + "px";
        let y = (Math.random() - 0.5) * 500 + "px";
        emoji.style.setProperty("--x", x);
        emoji.style.setProperty("--y", y);
        
        emoji.style.left = `${event.clientX}px`;
        emoji.style.top = `${event.clientY}px`;
        
        document.body.appendChild(emoji);

        // Remove emoji after animation
        setTimeout(() => {
            emoji.remove();
        }, 800);
    }
}); 