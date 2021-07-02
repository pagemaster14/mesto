const popupEditOpenButtonElement = document.querySelector('.edit-button');
const popupAddOpenButtonElement = document.querySelector('.add-button');
const popupElements = document.querySelectorAll('.popup');
const popupEditCloseButtonElement = document.querySelector('.popup-close_type_edit');
const popupAddCloseButtonElement = document.querySelector('.popup-close_type_add');
const popupPlaceCloseButtonElement = document.querySelector('.popup-close_type_image');
let profileName = document.querySelector('.profile-info__name');
let profileJob = document.querySelector('.profile-info__bio');
let formElement = document.querySelector('.form');
let formAddElement = document.querySelector('.form_type_add');
let nameInput = document.querySelector('.form__text_type_name');
let jobInput = document.querySelector('.form__text_type_bio');
const cardName = document.querySelector('.form__text_type_place');
const cardImg = document.querySelector('.form__text_type_img');
const itemTemplateContent = document.querySelector('.item-template').content;
const cardContainer = document.querySelector('.cards');
let popupPlaceImage = document.querySelector('.popup-place__image');
let popupPlaceName = document.querySelector('.popup-place__name');

const createItem = (cardName, cardImg) => {
    const newCard = itemTemplateContent.querySelector('.card').cloneNode(true);
    newCard.querySelector('.card__name').textContent = cardName;
    const selectCard = newCard.querySelector('.card__image');
    selectCard.src = cardImg;
    selectCard.alt = cardName;

    newCard.querySelector('.card__image').addEventListener('click', () => takePreviewImage());
    const takePreviewImage = () => {
        popupPlaceImage.src = selectCard.src;
        popupPlaceImage.alt = selectCard.alt;
        popupPlaceName.textContent = selectCard.alt;

    };

    setEventListeners(newCard);
    return newCard;
}

initialCards.forEach(function(el) {
    cardContainer.append(createItem(el.name, el.link));
});

function formAddSubmitHandler(evt) {
    evt.preventDefault();
    cardContainer.prepend(createItem(cardName.value, cardImg.value));
    formAddElement.reset();
    closePopup(1)
}

function setEventListeners(newCard) {
    newCard.querySelector('.delete-button').addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });
    newCard.querySelector('.like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-button_active')
    });
    newCard.querySelector('.card__image').addEventListener('click', () => OpenPopup(2));

}

function saveEditData() {
    OpenPopup(0);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function OpenPopup(index) {
    popupElements[index].classList.add('popup_opened');
}

function closePopup(index) {
    popupElements[index].classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(0)
}

formElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', formAddSubmitHandler);
popupEditCloseButtonElement.addEventListener('click', () => closePopup(0));
popupAddCloseButtonElement.addEventListener('click', () => closePopup(1));
popupPlaceCloseButtonElement.addEventListener('click', () => closePopup(2));
popupEditOpenButtonElement.addEventListener('click', () => saveEditData());
popupAddOpenButtonElement.addEventListener('click', () => OpenPopup(1));