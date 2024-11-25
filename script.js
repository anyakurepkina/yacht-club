// Переключатель тем
let page = document.querySelector('.page');
let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function () {
    page.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
    page.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

serifFontButton.onclick = function () {
    page.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
};

sansSerifFontButton.onclick = function () {
    page.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
};

// Отображение содержания

let articleSections = document.querySelectorAll('.blog-article');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');

    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
}

// Переключатель раскладки

let tileViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

listViewButton.onclick = function () {
    cardsList.classList.add('list');
    listViewButton.classList.add('active');
    tileViewButton.classList.remove('active');
};

tileViewButton.onclick = function () {
    cardsList.classList.remove('list');
    tileViewButton.classList.add('active');
    listViewButton.classList.remove('active');
};

// Галерея

let mainPhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews) {
    preview.onclick = function (event) {
        event.preventDefault();
        mainPhoto.src = preview.href;

        let activePreview = document.querySelector('.active-item');

        activePreview.classList.remove('active-item');
        preview.classList.add('active-item');
    };
}
