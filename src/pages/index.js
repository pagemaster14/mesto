import '../pages/index.css';

import { initialCards } from '../utils/initialCards.js'
import { popupEditOpenButtonElement, popupAddOpenButtonElement, formAddElement, formEditElement, nameInput, jobInput, cardName, cardImg, itemTemplateContent, cardContainer, popupEditElement, popupAddElement, popupPlaceElement } from '../utils/constants.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

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
            const cardElement = createCard(item)
            originalCardsList.addItem(cardElement);
        }
    },
    cardContainer
);
originalCardsList.renderItems();

function createCard(data) {
    const card = new Card(data, itemTemplateContent, handleCardClick)
    return card.renderCard()
}

const editProfileValidator = new FormValidator(validationSettings, formEditElement)
const addNewCardValidator = new FormValidator(validationSettings, formAddElement)
editProfileValidator.enableValidation()
addNewCardValidator.enableValidation()

popupAddOpenButtonElement.addEventListener('click', () => newCard.open());

const popupPlaceView = new PopupWithImage(popupPlaceElement)

function handleCardClick(name, link) {
    popupPlaceView.open(name, link)
};
popupPlaceView.setEventListeners()

const newCard = new PopupWithForm(popupAddElement, () => {
        const item = {
            name: cardName.value,
            link: cardImg.value
        };
        const newCardElement = createCard(item)
        originalCardsList.addItemPrepend(newCardElement);
        newCard.close()
        addNewCardValidator.resetValidation()
    },
    formAddElement)
newCard.setEventListeners()

const profilePopupInfo = new UserInfo({
    userNameSelector: '.profile-info__name',
    userBioSelector: '.profile-info__bio'
})

const profilePopup = new PopupWithForm(popupEditElement, (item) => {
        profilePopupInfo.setUserInfo(item);
        profilePopup.close()
    },
    formEditElement)
profilePopup.setEventListeners()

popupEditOpenButtonElement.addEventListener('click', function() {
    profilePopup.open();
    const originalUserInfo = profilePopupInfo.getUserInfo();
    nameInput.value = originalUserInfo.name
    jobInput.value = originalUserInfo.bio
    editProfileValidator.resetValidation()
})