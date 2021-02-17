window.addEventListener('DOMContentLoaded', () => {

    const select = document.querySelector('.form-select'),
        countries = document.querySelector('.countries'),
        ru = document.querySelector('.ru'),
        bru = document.querySelector('.bru'),
        kaz = document.querySelector('.kaz'),
        arrow = document.querySelector('.arrow'),
        flag = document.querySelector('.flag'),
        flagImg = document.getElementById('img')

    countries.style.display = 'none';
    select.addEventListener('click', () => {
        if (countries.style.display === "none") {
            countries.style.display = "block"
            arrow.style.transform = 'rotate(180deg)';
        } else {
            countries.style.display = "none"
            arrow.style.transform = 'rotate(0deg)';
        }
    });

    ru.addEventListener('click', () => {

        select.textContent = "Россия";
        const ruFlag = document.createElement('img');
        select.appendChild(ruFlag)
        ruFlag.setAttribute('src', 'images/ru-flag.svg');
        ruFlag.classList.add('flag');
        const arrowDown = document.createElement('img');
        select.appendChild(arrowDown)
        arrowDown.setAttribute('src', 'images/arrow.svg');
        arrowDown.classList.add('arrow');

        countries.style.display = "none"
    })
    kaz.addEventListener('click', () => {
        select.textContent = "Казахстан";

        const kazFlag = document.createElement('img');
        select.appendChild(kazFlag)
        kazFlag.setAttribute('src', 'images/flag.svg');
        kazFlag.classList.add('flag');
        const arrowDown = document.createElement('img');
        select.appendChild(arrowDown)
        arrowDown.setAttribute('src', 'images/arrow.svg');
        arrowDown.classList.add('arrow');

        countries.style.display = "none"
    })

    bru.addEventListener('click', () => {
        select.textContent = "Белорусия";

        const bruFlag = document.createElement('img');
        select.appendChild(bruFlag)
        bruFlag.setAttribute('src', 'images/bru-flag.svg');
        bruFlag.classList.add('flag');
        const arrowDown = document.createElement('img');
        select.appendChild(arrowDown)
        arrowDown.setAttribute('src', 'images/arrow.svg');
        arrowDown.classList.add('arrow');

        countries.style.display = "none"
    })










})