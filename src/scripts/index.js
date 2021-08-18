import '../pages/index.css';

import { initialCards } from './initialCards.js'
import { popupEditOpenButtonElement, popupAddOpenButtonElement, popupElements, profileName, profileJob, formElement, formAddElement, formEditElement, nameInput, jobInput, cardName, cardImg, itemTemplateContent, cardContainer, popupPlaceImage, popupPlaceName, popupEditElement, popupAddElement, popupPlaceElement } from './constants.js';
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

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

const originalCardsList = new Section({
        items: initialCards,
        renderer: (item) => {
            const cardElement = createCard(item.name, item.link)

            originalCardsList.addItem(cardElement);
        }
    },
    cardContainer
);
originalCardsList.renderItems();

function createCard(name, link) {
    const card = new Card(name, link, itemTemplateContent, handleCardClick)
    return card.renderCard()
}

const editProfileValidator = new FormValidator(validationSettings, formEditElement)
const addNewCardValidator = new FormValidator(validationSettings, formAddElement)
editProfileValidator.enableValidation()
addNewCardValidator.enableValidation()

popupAddOpenButtonElement.addEventListener('click', () => popupAdd.open());

const popupAdd = new Popup(popupAddElement)
const popupEdit = new Popup(popupEditElement)
const popupPlace = new Popup(popupPlaceElement)
popupAdd.setEventListeners()
popupEdit.setEventListeners()
popupPlace.setEventListeners()

function handleCardClick(name, link) {
    const popupPlaceView = new PopupWithImage(popupPlaceElement)
    popupPlaceView.open(name, link)
};

const newCard = new PopupWithForm(popupAddElement, (item) => {
        const newCardElement = createCard(item.cardname, item.cardimage)
        originalCardsList.addItemPrepend(newCardElement);
        newCard.close()
        addNewCardValidator.resetValidation()
    },
    formAddElement)
newCard.setEventListeners()

const profilePopupNewInfo = new UserInfo(profileName, profileJob)

const profilePopup = new PopupWithForm(popupEditElement, (item) => {
        profilePopupNewInfo.setUserInfo(item)
        profileName.textContent = item.fullname;
        profileJob.textContent = item.job;

        popupEdit.close()
    },
    formEditElement)
profilePopup.setEventListeners()

popupEditOpenButtonElement.addEventListener('click', function() {
    const profilePopupInfo = new UserInfo(profileName, profileJob)
    popupEdit.open();
    const originalUserInfo = profilePopupInfo.getUserInfo();
    nameInput.value = originalUserInfo.name
    jobInput.value = originalUserInfo.bio
    editProfileValidator.resetValidation()
})