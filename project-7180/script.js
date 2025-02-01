/* Dynamic emoji changing */
const emojis = ['🏆', '🇹🇼', '🎨', '☕️', '🪩', '🌵', '🥳', '🚀', '🥐', '🌏', '👇', '🫶'];
const interval = 900; // change every 900ms

function changeEmoji() {
    const emojiContainer = document.getElementById('emoji-container');
    const currentEmoji = emojiContainer.textContent;
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    if (randomEmoji !== currentEmoji) {
        emojiContainer.textContent = randomEmoji;
    }
}

setInterval(changeEmoji, interval);

/* Loading animation codes, from workshop */
window.addEventListener('load', function () {
    setTimeout(function () {
        var loadingOverlay = document.getElementById('loading');
        loadingOverlay.style.display = 'none';
    }, 2000);
});

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {}
const appearOnScroll = new IntersectionObserver 
(function(
    entries, appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions)
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })