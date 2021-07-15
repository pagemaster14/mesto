const showInputError = (inputElement, errorMessage, errorClass) => {
    const formSectionElement = inputElement.closest(".form__section");
    const errorElement = formSectionElement.querySelector(".form__input-error");

    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (inputElement, errorClass) => {
    const formSectionElement = inputElement.closest(".form__section");
    const errorElement = formSectionElement.querySelector(".form__input-error");

    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
};

const checkInputValidity = (inputElement, errorClass) => {
    const isInputElementNotValid = !inputElement.validity.valid;

    if (isInputElementNotValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(inputElement, errorMessage, errorClass)
    } else {
        hideInputError(inputElement, errorClass)
    }
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputList.some(findAtLeastOneNotValid);

    if (hasNotValidInput) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove(inactiveButtonClass);
    }
}

const setEventListenersValidate = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    formElement.addEventListener("submit", handleFormSubmit);


    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    const inputListIterator = (inputElement) => {
        const handleInput = () => {
            checkInputValidity(inputElement, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        };

        inputElement.addEventListener("input", handleInput);
    };

    inputList.forEach(inputListIterator)

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
}


const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass }) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
    formList.forEach((formElement) => {
        setEventListenersValidate(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass)
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