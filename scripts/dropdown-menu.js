const menubtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');

menubtn.addEventListener('click', function() {
    menubtn.classList.toggle('dropbtn-active');
    dropdown.classList.toggle('display-dropdown');
})