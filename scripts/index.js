import { initialCards } from './initialCards.js'
import { popupEditOpenButtonElement, popupAddOpenButtonElement, popupElements, profileName, profileJob, formElement, formAddElement, formEditElement, nameInput, jobInput, cardName, cardImg, itemTemplateContent, cardContainer, popupPlaceImage, popupPlaceName, popupEditElement, popupAddElement, popupPlaceElement } from './constants.js';
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'


const validationSettings = {
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit-btn',
    inactiveButtonClass: 'form__submit-btn_inactive',
    inputErrorClass: '.form__input-error',
    errorClass: 'form__input-error_active',
    formSection: '.form__section',
    formInputError: '.form__input-error'
};

const editProfileValidator = new FormValidator(validationSettings, formEditElement)
const addNewCardValidator = new FormValidator(validationSettings, formAddElement)
editProfileValidator.enableValidation()
addNewCardValidator.enableValidation()

initialCards.forEach(function(el) {
    const card = new Card(el.name, el.link, itemTemplateContent, handleCardClick)
    cardContainer.append(card.renderCard());
});

function handleCardClick(name, link) {
    popupPlaceImage.src = link;
    popupPlaceImage.alt = name;
    popupPlaceName.textContent = name;
    openPopup(popupPlaceElement)
};


function formAddSubmitHandler(evt) {
    const card = new Card(cardName.value, cardImg.value, itemTemplateContent, handleCardClick)
    evt.preventDefault();
    cardContainer.prepend(card.renderCard());
    formAddElement.reset();
    closePopup(popupAddElement)
    addNewCardValidator.resetValidation()
}

function openProfilePopup() {
    openPopup(popupEditElement)
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

export const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler)
    addNewCardValidator.resetValidation()
}

const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditElement)
}

function keyHandler(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup)
    }
}

popupElements.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup-close')) {
            closePopup(popup)
        }
    })
})

formElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', formAddSubmitHandler);
popupEditOpenButtonElement.addEventListener('click', () => openProfilePopup());
popupAddOpenButtonElement.addEventListener('click', () => openPopup(popupAddElement));