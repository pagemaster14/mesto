export class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector
        this._inputSelector = config.inputSelector
        this._submitButtonSelector = config.submitButtonSelector
        this._inactiveButtonClass = config.inactiveButtonClass
        this._inputErrorClass = config.inputErrorClass
        this._errorClass = config.errorClass
        this._formSection = config.formSection
        this._formInputError = config.formInputError
        this._formElement = formElement
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._invalidText = config.invalidText
    }

    _showInputError(inputElement, errorMessage) {
        const formSectionElement = inputElement.closest(this._formSection);
        const errorElement = formSectionElement.querySelector(this._inputErrorClass);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
        const closestInput = formSectionElement.querySelector(this._inputSelector);
        closestInput.classList.add(this._invalidText);
    };

    _hideInputError(inputElement) {
        const formSectionElement = inputElement.closest(this._formSection);
        const errorElement = formSectionElement.querySelector(this._formInputError);

        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        const closestInput = formSectionElement.querySelector(this._inputSelector);
        closestInput.classList.remove(this._invalidText);
    };

    resetValidation() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

    _checkInputValidity(inputElement) {
        const isInputElementNotValid = !inputElement.validity.valid;

        if (isInputElementNotValid) {
            const errorMessage = inputElement.validationMessage;

            this._showInputError(inputElement, errorMessage)
        } else {
            this._hideInputError(inputElement)
        }
    };

    _toggleButtonState() {
        const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
        const hasNotValidInput = this._inputList.some(findAtLeastOneNotValid);

        if (hasNotValidInput) {
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _setEventListenersValidate() {
        const handleFormSubmit = (event) => {
            event.preventDefault();
        };
        this._formElement.addEventListener("submit", handleFormSubmit);

        const inputListIterator = (inputElement) => {
            const handleInput = () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            };

            inputElement.addEventListener("input", handleInput);
        };

        this._inputList.forEach(inputListIterator)

        this._toggleButtonState();
    }

    enableValidation() {
        this._setEventListenersValidate()
    };

}