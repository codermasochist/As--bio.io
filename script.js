const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.ind');
const infoContent = document.getElementById('infoContent');
const infoContainer = document.querySelector('.info-container');

function setIndicator() {
    const activeItem = document.querySelector('.list.active');
    const itemRect = activeItem.getBoundingClientRect();
    const navRect = document.querySelector('.navigation').getBoundingClientRect();
    
    const centerX = itemRect.left + (itemRect.width / 2);
    const centerY = navRect.bottom - 40; 
    
    indicator.style.left = `${centerX}px`;
    indicator.style.top = `${centerY}px`;
}

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    setIndicator(); 

    const clickedItem = this.querySelector('.text').innerText.toLowerCase();
    showInfo(clickedItem);
}

function showInfo(menuItem) {
    let content = '';
    switch (menuItem) {
        case 'home':
            infoContainer.classList.remove('show'); // Скрыть контейнер информации
            infoContent.innerHTML = ''; // Удаляем контент
            return; // Завершить выполнение, чтобы не показывать контент
        case 'telegram':
            content = '<h2>Telegram Link</h2><p><a href="http://t.me/codermasochist" target="_blank">Telegram</a></p>';
            break;
        case 'tiktok':
            content = '<h2>Tik-Tok Link</h2><p><a href="https://www.tiktok.com/@codermasohist?_t=8r5CIcyrqMo&_r=1" target="_blank">TikTok</a></p>';
            break;
        case 'github':
            content = '<h2>GitHub Link</h2><p><a href="https://github.com/codermasochist" target="_blank">GitHub</a></p>';
            break;
        case 'bio':
            content = '<h2>Bio</h2><p><a href="https://t.me/Asinformation/29" target="_blank">Biography</a></p>';
            break;
        case 'setting':
            content = `<h2>Settings</h2>
                               <p>Version of the resolution</p>
                               <h3>PC - version:</h3>
                               <ul>
                                   <li>It is advisable to use the PC version of the site, it just works much better.</li>
                               </ul>
                               <h3>Telephon - version:</h3>
                               <ul>
                                   <li>The phone version works but not quite as well as the PC version.</li>
                               </ul>`;
            break;
    }

    infoContent.innerHTML = content;
    infoContainer.classList.add('show'); // Показать контейнер с информацией
}

document.getElementById('mobileVersionButton').addEventListener('click', function() {
    localStorage.setItem('version', 'mobile');
    location.reload(); 
});

document.getElementById('desktopVersionButton').addEventListener('click', function() {
    localStorage.setItem('version', 'desktop');
    location.reload(); 
});

function setupVersion() {
    const version = localStorage.getItem('version') || 'desktop'; 

    if (version === 'mobile') {
        document.body.classList.add('mobile-version'); 
    } else {
        document.body.classList.remove('mobile-version'); 
    }
}

list.forEach((item) => item.addEventListener('click', activeLink));
window.addEventListener('load', () => {
    setIndicator();
    setupVersion(); 
});
