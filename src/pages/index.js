import '../pages/index.css';

import { validationSettings, options, profileImage, popupDeleteConfirmButton, popupEditOpenButtonElement, popupAddOpenButtonElement, popupEditAvatarOpenButtonElement, formAddElement, formEditElement, formEditAvatarElement, nameInput, jobInput, itemTemplateContent, cardContainer, popupEditElement, popupAddElement, popupPlaceElement, popupDeleteElement, popupEditAvatarElement } from '../utils/constants.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { Popup } from '../components/Popup';

const editProfileValidator = new FormValidator(validationSettings, formEditElement)
const addNewCardValidator = new FormValidator(validationSettings, formAddElement)
const editAvatarValidator = new FormValidator(validationSettings, formEditAvatarElement)
editProfileValidator.enableValidation()
addNewCardValidator.enableValidation()
editAvatarValidator.enableValidation()

const profilePopupInfo = new UserInfo({
    userNameSelector: '.profile-info__name',
    userBioSelector: '.profile-info__bio'
})

const api = new Api(options);

let userId = null;

api.getUserInfo()
    .then((res) => {
        userId = res._id;
        profileImage.src = res.avatar
        profilePopupInfo.setUserInfo(res);
    })

function createCard(data) {
    const card = new Card(data, itemTemplateContent, handleCardClick, api, handleDeleteClick, userId)
    return card.renderCard()
}

const deletePopup = new Popup(popupDeleteElement)
deletePopup.setEventListeners()

function handleDeleteClick(id, card) {
    deletePopup.open();
    popupDeleteConfirmButton.addEventListener('click', () => {
        api.deleteCard(id)
            .then(() => {
                card.remove();
                deletePopup.close();

            })
    }, { once: true })
}

const popupPlaceView = new PopupWithImage(popupPlaceElement)

function handleCardClick(name, link) {
    popupPlaceView.open(name, link)
};
popupPlaceView.setEventListeners()

const profilePopup = new PopupWithForm(popupEditElement, (item) => {
        profilePopup.renderLoading(true)
        api.updateUserInfo(item)
            .then((data) => {
                profilePopupInfo.setUserInfo(data);
                profilePopup.close()
            })
            .finally(() => {
                profilePopup.renderLoading(false)
            })
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

const originalCardsList = new Section({
        renderer: (item) => {
            const cardElement = createCard(item)
            originalCardsList.addItem(cardElement);
        }
    },
    cardContainer
);

api.getInitialCards()
    .then(data => {
        originalCardsList.renderItems(data);
    })

const newCard = new PopupWithForm(popupAddElement, () => {
        newCard.renderLoading(true);
        const inputValues = newCard.getInputValues();
        api.addNewCard(inputValues)
            .then(item => {
                const newCardElement = createCard(item)
                originalCardsList.addItemPrepend(newCardElement);
                newCard.close()
                addNewCardValidator.resetValidation()
            })
            .finally(() => {
                newCard.renderLoading(false)
            })
    },
    formAddElement)
newCard.setEventListeners()

popupAddOpenButtonElement.addEventListener('click', () => newCard.open());

const popupAvatar = new PopupWithForm(popupEditAvatarElement, () => {
        popupAvatar.renderLoading(true);
        const inputValues = popupAvatar.getInputValues();
        api.updateUserAvatar(inputValues)
            .then(data => {
                popupAvatar.renderLoading(true)
                profileImage.src = data.avatar
                popupAvatar.close()
                editAvatarValidator.resetValidation()
            })
            .finally(() => {
                popupAvatar.renderLoading(false)
            })
    },
    formEditAvatarElement)
popupAvatar.setEventListeners()

popupEditAvatarOpenButtonElement.addEventListener('click', () => popupAvatar.open());