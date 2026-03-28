// Smooth scrolling for in-page anchor links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') {
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (!targetElement) {
            return;
        }

        event.preventDefault();
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

const securityQuotes = [
    "Password management should be predictable, local, and under the user's control.",
    'A vault is only useful when its trust model is clear and easy to defend.',
    'Local-first security reduces exposure by removing unnecessary remote dependencies.',
    'Autofill is only valuable when it stays practical on real login pages and predictable for the user.',
    'Strong security design should reduce ambiguity, not add more places for secrets to leak.'
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.querySelector('.quote-section blockquote');
    if (quoteElement) {
        const randomQuote = securityQuotes[Math.floor(Math.random() * securityQuotes.length)];
        quoteElement.textContent = randomQuote;
    }
});
