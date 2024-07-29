document.addEventListener('DOMContentLoaded', function() {
    const mysteryButton = document.getElementById('mysteryButton');
    if (mysteryButton) {
        mysteryButton.addEventListener('click', function() {
            const mysteryLinks = [
                'https://hakuba.medium.com/',
                'https://neal.fun/password-game/',
                'https://neal.fun/perfect-circle/',
                'https://www.cryptidophilia.com/what-is-a-cryptid/'
            ];
            const randomLink = mysteryLinks[Math.floor(Math.random() * mysteryLinks.length)];
            window.open(randomLink, '_blank');
        });
    }
});