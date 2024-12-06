document.querySelectorAll('.infant').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});
