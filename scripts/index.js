const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const popupOpenButtonElement = document.querySelector('.edit-button')
const popupAddOpenButtonElement = document.querySelector('.add-button')
const popupElement = document.querySelector('.popup')
const popupAddElement = document.querySelector('.popup_type_add')
const popupCloseButtonElement = popupElement.querySelector('.popup-close')
const popupAddCloseButtonElement = document.querySelector('.popup-close_type_add')
let profileName = document.querySelector('.profile-info__name')
let profileJob = document.querySelector('.profile-info__bio')
let formElement = document.querySelector('.form')
let formAddElement = document.querySelector('.form_type_add')
let nameInput = document.querySelector('.form__text_type_name')
let jobInput = document.querySelector('.form__text_type_bio')
const cardName = document.querySelector('.form__text_type_place');
const cardImg = document.querySelector('.form__text_type_img');
const itemTemplateContent = document.querySelector('.item-template')
const cardContainer = document.querySelector('.cards')
let popapPlace = document.querySelector('.popup-place')
let popapPlaceImage = document.querySelector('.popup-place__image')
let popapPlaceName = document.querySelector('.popup-place__name')
let cardOpener = document.querySelector('.card__image');
const popupPlaceCloseButtonElement = document.querySelector('.popup-close_type_image')

function createItem(name, link) {
    const newCard = itemTemplateContent.content.querySelector('.card').cloneNode(true);
    newCard.querySelector('.card__name').textContent = name;
    const selectCard = newCard.querySelector('.card__image');
    selectCard.src = link;
    selectCard.alt = name;

    newCard.querySelector('.like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-button_active')
    });

    newCard.querySelector('.delete-button').addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });

    newCard.querySelector('.card__image').addEventListener('click', () => takePreviewImage());

    const takePreviewImage = () => {
        popapPlaceImage.src = link;
        popapPlaceImage.alt = name;
        popapPlaceName.textContent = name;
        popapPlace.classList.toggle('popup_opened')
    };

    setEventListeners(newCard);

    return newCard;
}

document.querySelector('.popup-close_type_image').addEventListener('click', function() {
    popapPlace.classList.toggle('popup_opened')
});

initialCards.forEach(function(el) {

    cardContainer.append(createItem(el.name, el.link));

});

function setEventListeners(newCard) {
    newCard.querySelector('.delete-button').addEventListener('click', handleDelete);
}

function handleDelete(evt) {
    evt.target.closest('.card').remove();
}

const openPopup = function() {
    popupElement.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const openAddPopup = function() {
    popupAddElement.classList.add('popup_opened')
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened')
}

const closeAddPopup = function() {
    popupAddElement.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup()
}

function renderItem(cardName, cardImg) {

    const newCard = itemTemplateContent.content.cloneNode(true);
    newCard.querySelector('.card__name').textContent = cardName.value;
    const selectCard = newCard.querySelector('.card__image');
    selectCard.src = cardImg.value;
    selectCard.alt = cardName.value;

    newCard.querySelector('.like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-button_active')
    });

    newCard.querySelector('.delete-button').addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });

    newCard.querySelector('.card__image').addEventListener('click', () => takePreviewImage());

    const takePreviewImage = () => {
        popapPlaceImage.src = selectCard.src;
        popapPlaceImage.alt = selectCard.alt;
        popapPlaceName.textContent = selectCard.alt;
        popapPlace.classList.toggle('popup_opened')
    };

    cardContainer.prepend(newCard);

    cardImg.value = '';
    cardName.value = '';
}

function formAddSubmitHandler(evt) {
    evt.preventDefault();
    renderItem(cardName, cardImg);
    closeAddPopup()
}

formElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', formAddSubmitHandler);
popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupAddOpenButtonElement.addEventListener('click', openAddPopup)
popupAddCloseButtonElement.addEventListener('click', closeAddPopup)