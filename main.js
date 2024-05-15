const closeMenuBtn = document.getElementById('closeBtn');
const openMenuBtn = document.getElementById('openMenuBtn');
const menuLinksContainer = document.querySelector('.menu-links');

openMenuBtn.addEventListener('click', function() {
    menuLinksContainer.style.right = '0%'
})

closeMenuBtn.addEventListener('click', function() {
    menuLinksContainer.style.right = '-100%'
})