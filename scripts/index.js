const popupEditOpenButtonElement = document.querySelector('.edit-button');
const popupAddOpenButtonElement = document.querySelector('.add-button');
const popupElement = document.querySelector('.popup');
const popupElements = document.querySelectorAll('.popup');
const popupEditCloseButtonElement = document.querySelector('.popup-close_type_edit');
const popupAddCloseButtonElement = document.querySelector('.popup-close_type_add');
const popupPlaceCloseButtonElement = document.querySelector('.popup-close_type_image');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__bio');
const formElement = document.querySelector('.form');
const formAddElement = document.querySelector('.form_type_add');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_bio');
const cardName = document.querySelector('.form__text_type_place');
const cardImg = document.querySelector('.form__text_type_img');
const itemTemplateContent = document.querySelector('.item-template').content;
const cardContainer = document.querySelector('.cards');
const popupPlaceImage = document.querySelector('.popup-place__image');
const popupPlaceName = document.querySelector('.popup-place__name');
const popupEditElement = document.querySelector('.popup_type_edit-profile');
const popupAddElement = document.querySelector('.popup_type_add');
const popupPlaceElement = document.querySelector('.popup-place');

const createItem = (name, link) => {
    const newCard = itemTemplateContent.querySelector('.card').cloneNode(true);
    newCard.querySelector('.card__name').textContent = name;
    const selectCard = newCard.querySelector('.card__image');
    selectCard.src = link;
    selectCard.alt = name;

    setEventListeners(newCard, selectCard);
    return newCard;
}

initialCards.forEach(function(el) {
    cardContainer.append(createItem(el.name, el.link));
});

function formAddSubmitHandler(evt) {
    evt.preventDefault();
    cardContainer.prepend(createItem(cardName.value, cardImg.value));
    formAddElement.reset();
    closePopup(popupAddElement)
}

const takePreviewImage = (selectCard) => {
    popupPlaceImage.src = selectCard.src;
    popupPlaceImage.alt = selectCard.alt;
    popupPlaceName.textContent = selectCard.alt;
    openPopup(popupPlaceElement)
};

function setEventListeners(newCard, selectCard) {
    newCard.querySelector('.delete-button').addEventListener('click', function(evt) {
        evt.target.closest('.card').remove();
    });
    newCard.querySelector('.like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('like-button_active')
    });
    newCard.querySelector('.card__image').addEventListener('click', () => takePreviewImage(selectCard));
}

function openProfilePopup() {
    openPopup(popupEditElement)
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler)
}

const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_opened');
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
        activePopup.removeEventListener('keydown', keyHandler);
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