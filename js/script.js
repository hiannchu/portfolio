// Back to top function
window.onscroll = function() {
    let backToTop = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

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