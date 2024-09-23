document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});
