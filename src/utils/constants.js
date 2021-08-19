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

export { popupEditOpenButtonElement, popupAddOpenButtonElement, formAddElement, formEditElement, nameInput, jobInput, cardName, cardImg, itemTemplateContent, cardContainer, popupEditElement, popupAddElement, popupPlaceElement };