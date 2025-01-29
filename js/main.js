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