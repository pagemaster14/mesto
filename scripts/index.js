const popupOpenButtonElement = document.querySelector('.edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup-close')

console.log(popupOpenButtonElement, popupElement, popupCloseButtonElement)

const togglePopupVisibility = function() {
    popupElement.classList.toggle('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }

    togglePopupVisibility()
}

popupOpenButtonElement.addEventListener('click', togglePopupVisibility)
popupCloseButtonElement.addEventListener('click', togglePopupVisibility)
popupElement.addEventListener('click', closePopupByClickOnOverlay)

let profileName = document.querySelector('.profile-info__name')
let profileJob = document.querySelector('.profile-info__bio')
let formElement = document.querySelector('.input')
let nameInput = document.querySelector('.input__text_name')
let jobInput = document.querySelector('.input__text_bio')


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    togglePopupVisibility()
}


formElement.addEventListener('submit', formSubmitHandler);