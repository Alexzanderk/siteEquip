export const menuCatalog = (function() {
    const iconMenu = document.getElementById('menu-catalog');

    function toggleMenu(event) {
        event.preventDefault();

        this.classList.toggle('open');
        const leftSideMenu = document.querySelector('.left-side-catalog');
        leftSideMenu.classList.toggle('open');
    }

    iconMenu.addEventListener('click', toggleMenu);
})();