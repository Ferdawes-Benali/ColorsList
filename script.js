const items = document.querySelectorAll('li');


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

items.forEach(item => {
    item.addEventListener('click', () => {
        const r = getRandomInt(0, 255);
        const g = getRandomInt(0, 255);
        const b = getRandomInt(0, 255);
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});