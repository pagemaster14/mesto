const popupEditOpenButtonElement = document.querySelector('.edit-button');
const popupAddOpenButtonElement = document.querySelector('.add-button');
const formAddElement = document.querySelector('.form_type_add');
const formEditElement = document.querySelector('.form_type_edit');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_bio');
const cardName = document.querySelector('.form__text_type_place');
const cardImg = document.querySelector('.form__text_type_img');
const itemTemplateContent = document.querySelector('.item-template').content;
const cardContainer = document.querySelector('.cards');
const popupEditElement = document.querySelector('.popup_type_edit-profile');
const popupAddElement = document.querySelector('.popup_type_add');
const popupPlaceElement = document.querySelector('.popup-place');

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

export { validationSettings, popupEditOpenButtonElement, popupAddOpenButtonElement, formAddElement, formEditElement, nameInput, jobInput, cardName, cardImg, itemTemplateContent, cardContainer, popupEditElement, popupAddElement, popupPlaceElement };