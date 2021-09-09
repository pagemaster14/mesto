const profileImage = document.querySelector('.profile__image')
const popupEditOpenButtonElement = document.querySelector('.edit-button');
const popupAddOpenButtonElement = document.querySelector('.add-button');
const popupEditAvatarOpenButtonElement = document.querySelector('.avatar-button');
const formAddElement = document.querySelector('.form_type_add');
const formEditElement = document.querySelector('.form_type_edit');
const formEditAvatarElement = document.querySelector('.form_type_edit-avatar');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_bio');
const itemTemplateContent = document.querySelector('.item-template').content;
const cardContainer = document.querySelector('.cards');
const popupEditElement = document.querySelector('.popup_type_edit-profile');
const popupAddElement = document.querySelector('.popup_type_add');
const popupEditAvatarElement = document.querySelector('.popup_type_edit-avatar');
const popupPlaceElement = document.querySelector('.popup-place');
const popupDeleteElement = document.querySelector('.popup_type_delete');
const popupDeleteConfirmButton = document.querySelector('.submit-btn_type_delete')

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

const options = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27/',
    headers: {
        authorization: 'a70aac99-3995-441f-a1d5-acc4588f1199',
        'Content-Type': 'application/json'
    },
};

export { validationSettings, options, profileImage, popupDeleteConfirmButton, popupEditOpenButtonElement, popupAddOpenButtonElement, popupEditAvatarOpenButtonElement, formAddElement, formEditElement, formEditAvatarElement, nameInput, jobInput, itemTemplateContent, cardContainer, popupEditElement, popupAddElement, popupPlaceElement, popupDeleteElement, popupEditAvatarElement };