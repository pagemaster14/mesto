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
    formInputError: '.form__input-error',
    invalidText: 'form__text_invalid'
};

const editProfileValidator = new FormValidator(validationSettings, formEditElement)
const addNewCardValidator = new FormValidator(validationSettings, formAddElement)
editProfileValidator.enableValidation()
addNewCardValidator.enableValidation()

initialCards.forEach(function(el) {
    cardContainer.append(createCard(el.name, el.link));
});

function handleCardClick(name, link) {
    popupPlaceImage.src = link;
    popupPlaceImage.alt = name;
    popupPlaceName.textContent = name;
    openPopup(popupPlaceElement)
};


function formAddSubmitHandler(evt) {
    evt.preventDefault();
    cardContainer.prepend(createCard(cardName.value, cardImg.value));
    formAddElement.reset();
    closePopup(popupAddElement)
    addNewCardValidator.resetValidation()
}

function createCard(name, link) {
    const card = new Card(name, link, itemTemplateContent, handleCardClick)
    return card.renderCard()
}

function openProfilePopup() {
    openPopup(popupEditElement)
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    editProfileValidator.resetValidation()
}

export const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler)
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