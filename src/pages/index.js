import '../pages/index.css';

import { validationSettings, options, popupDeleteConfirmButton, popupEditOpenButtonElement, popupAddOpenButtonElement, popupEditAvatarOpenButtonElement, formAddElement, formEditElement, formEditAvatarElement, nameInput, jobInput, itemTemplateContent, cardContainer, popupEditElement, popupAddElement, popupPlaceElement, popupDeleteElement, popupEditAvatarElement } from '../utils/constants.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { DeletePopup } from '../components/DeletePopup';

const editProfileValidator = new FormValidator(validationSettings, formEditElement)
const addNewCardValidator = new FormValidator(validationSettings, formAddElement)
const editAvatarValidator = new FormValidator(validationSettings, formEditAvatarElement)
editProfileValidator.enableValidation()
addNewCardValidator.enableValidation()
editAvatarValidator.enableValidation()

const profilePopupInfo = new UserInfo({
    userNameSelector: '.profile-info__name',
    userBioSelector: '.profile-info__bio',
    userAvatarSelector: '.profile__image'
})

const api = new Api(options);

let userId = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([res, data]) => {
        userId = res._id;
        profilePopupInfo.setUserInfo(res);
        originalCardsList.renderItems(data);
    })
    .catch(err => console.log(err))

function createCard(data) {
    const card = new Card(data, itemTemplateContent, handleCardClick, api, handleDeleteClick, userId)
    return card.renderCard()
}

const deletePopup = new DeletePopup(popupDeleteElement)
deletePopup.setEventListeners()

function handleDeleteClick(card, id) {
    deletePopup.open();
    deletePopup.setSubmitAction(() => {
        api.deleteCard(id)
            .then(() => {
                card.remove();
                deletePopup.close();
            })
            .catch(err => console.log(err))
    })
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
            .catch(err => console.log(err))
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

const newCard = new PopupWithForm(popupAddElement, () => {
    newCard.renderLoading(true);
    const inputValues = newCard.getInputValues();
    api.addNewCard(inputValues)
        .then(item => {
            const newCardElement = createCard(item)
            originalCardsList.addItemPrepend(newCardElement);
            newCard.close()
        })
        .catch(err => console.log(err))
        .finally(() => {
            newCard.renderLoading(false)
        })
})
newCard.setEventListeners()

popupAddOpenButtonElement.addEventListener('click', () => {
    newCard.open()
    addNewCardValidator.resetValidation()
});

const popupAvatar = new PopupWithForm(popupEditAvatarElement, () => {
    popupAvatar.renderLoading(true);
    const inputValues = popupAvatar.getInputValues();
    api.updateUserAvatar(inputValues)
        .then(data => {
            profilePopupInfo.setUserInfo(data);
            popupAvatar.close()
        })
        .catch(err => console.log(err))
        .finally(() => {
            popupAvatar.renderLoading(false)
        })
})
popupAvatar.setEventListeners()

popupEditAvatarOpenButtonElement.addEventListener('click', () => {
    popupAvatar.open()
    editAvatarValidator.resetValidation()
});