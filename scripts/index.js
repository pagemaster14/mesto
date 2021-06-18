const popupOpenButtonElement = document.querySelector('.edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup-close')
let profileName = document.querySelector('.profile-info__name')
let profileJob = document.querySelector('.profile-info__bio')
let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__text_type_name')
let jobInput = document.querySelector('.form__text_type_bio')

const openPopup = function() {
    popupElement.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClickOnOverlay)