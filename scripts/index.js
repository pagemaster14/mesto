import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

const validationSettings = {
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit-btn',
    inactiveButtonClass: 'form__submit-btn_inactive',
    inputErrorClass: '.form__input-error',
    errorClass: 'form__input-error_active'
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
}

function openProfilePopup() {
    openPopup(popupEditElement)
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
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
    const activePopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(activePopup)
    }
}

popupElements.forEach((openedPopup) => {
    const currentPopup = openedPopup.closest('.popup');
    openedPopup.addEventListener('mousedown', (event) => {
        if (event.target !== event.currentTarget) {
            return
        }
        closePopup(currentPopup)
    })
})

formElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', formAddSubmitHandler);
popupEditCloseButtonElement.addEventListener('click', () => closePopup(popupEditElement));
popupAddCloseButtonElement.addEventListener('click', () => closePopup(popupAddElement));
popupPlaceCloseButtonElement.addEventListener('click', () => closePopup(popupPlaceElement));
popupEditOpenButtonElement.addEventListener('click', () => openProfilePopup());
popupAddOpenButtonElement.addEventListener('click', () => openPopup(popupAddElement));