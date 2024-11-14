const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.ind');
const infoContent = document.getElementById('infoContent');
const infoContainer = document.querySelector('.info-container');
const navigation = document.querySelector('.navigation');

function setIndicator() {
    const activeItem = document.querySelector('.list.active');
    const itemRect = activeItem.getBoundingClientRect();
    const navRect = navigation.getBoundingClientRect();
    const centerX = itemRect.left + itemRect.width / 2;
    const centerY = navRect.bottom - 40;
    indicator.style.left = ${centerX}px;
    indicator.style.top = ${centerY}px;
}

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    setIndicator();

    const clickedItem = this.querySelector('.text').innerText.toLowerCase();
    showInfo(clickedItem);

    if (clickedItem === 'home') {
        navigation.classList.remove('expanded');
        infoContainer.classList.add('collapsed'); // Сворачиваем контент
    } else {
        navigation.classList.add('expanded');
        infoContainer.classList.remove('collapsed'); // Показываем контент
    }
}

function showInfo(menuItem) {
    let content = '';
    switch (menuItem) {
        case 'home':
            infoContent.innerHTML = '';
            return;
        case 'telegram':
            content = '<h2>Telegram Link</h2><p><a href="http://t.me/codermasochist" target="_blank">Telegram</a></p>';
            break;
        case 'tiktok':
            content = '<h2>TikTok Link</h2><p><a href="https://www.tiktok.com/@codermasohist?_t=8r5CIcyrqMo&_r=1" target="_blank">TikTok</a></p>';
            break;
        case 'github':
            content = '<h2>GitHub Link</h2><p><a href="https://github.com/codermasochist" target="_blank">GitHub</a></p>';
            break;
        case 'bio':
            content = '<h2>Bio</h2><p><a href="https://t.me/Asinformation/29" target="_blank">Biography</a></p>';
            break;
    }

    infoContent.innerHTML = content;
}

list.forEach((item) => item.addEventListener('click', activeLink));
window.addEventListener('load', setIndicator);