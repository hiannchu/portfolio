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