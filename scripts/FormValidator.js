export class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector
        this._inputSelector = config.inputSelector
        this._submitButtonSelector = config.submitButtonSelector
        this._inactiveButtonClass = config.inactiveButtonClass
        this._inputErrorClass = config.inputErrorClass
        this._errorClass = config.errorClass
        this._formElement = formElement
    }

    _showInputError(inputElement, errorMessage) {
        const formSectionElement = inputElement.closest(".form__section");
        const errorElement = formSectionElement.querySelector(this._inputErrorClass);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const formSectionElement = inputElement.closest(".form__section");
        const errorElement = formSectionElement.querySelector(".form__input-error");

        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    };

    _checkInputValidity(inputElement) {
        const isInputElementNotValid = !inputElement.validity.valid;

        if (isInputElementNotValid) {
            const errorMessage = inputElement.validationMessage;

            this._showInputError(inputElement, errorMessage)
        } else {
            this._hideInputError(inputElement)
        }
    };

    _toggleButtonState(inputList, buttonElement) {
        const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
        const hasNotValidInput = inputList.some(findAtLeastOneNotValid);

        if (hasNotValidInput) {
            buttonElement.setAttribute("disabled", true);
            buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            buttonElement.removeAttribute("disabled");
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _setEventListenersValidate() {
        const handleFormSubmit = (event) => {
            event.preventDefault();
        };
        formElement.addEventListener("submit", handleFormSubmit);

        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        const inputListIterator = (inputElement) => {
            const handleInput = () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            };

            inputElement.addEventListener("input", handleInput);
        };

        inputList.forEach(inputListIterator)

        this._toggleButtonState(inputList, buttonElement);
    }

    enableValidation() {
        this._setEventListenersValidate()
    };

}