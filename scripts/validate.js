const showInputError = (inputElement, errorMessage) => {
    const formSectionElement = inputElement.closest(".form__section");
    const errorElement = formSectionElement.querySelector(".form__input-error");

    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (inputElement) => {
    const formSectionElement = inputElement.closest(".form__section");
    const errorElement = formSectionElement.querySelector(".form__input-error");

    errorElement.textContent = "";
    errorElement.classList.remove('form__input-error_active');
};

const checkInputValidity = (inputElement) => {
    const isInputElementNotValid = !inputElement.validity.valid;

    if (isInputElementNotValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(inputElement, errorMessage)
    } else {
        hideInputError(inputElement)
    }
};

const toggleButtonState = (inputList, buttonElement) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findAtLeastOneNotValid);

    if (hasNotValidInput) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add("form__submit-btn_inactive");
    } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove("form__submit-btn_inactive");
    }
}

const setEventListenersValidate = (formElement, inputSelector) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    formElement.addEventListener("submit", handleFormSubmit);


    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(".form__submit-btn");

    const inputListIterator = (inputElement) => {
        const handleInput = () => {
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement);
        };

        inputElement.addEventListener("input", handleInput);
    };

    inputList.forEach(inputListIterator)

    toggleButtonState(inputList, buttonElement);
}


const enableValidation = ({ formSelector, inputSelector }) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
    formList.forEach((formElement) => {
        setEventListenersValidate(formElement, inputSelector)
    });
};

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit-btn',
    inactiveButtonClass: 'form__submit-btn_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
});