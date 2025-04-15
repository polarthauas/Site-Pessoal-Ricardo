window.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('main-content');

        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('shifted')
            toggle.innerHTML = sidebar.classList.contains('active') ? '←' : '→';
        });

        const links = document.querySelectorAll('nav a');
        const url = window.location.href;

        links.forEach(link => {    
            if (url.includes(link.getAttribute('href'))){
                link.classList.add('active')
            }
        });
});
