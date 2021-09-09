import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit, formSelector) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit
        this._formSelector = formSelector
        this._button = this._popupElement.querySelector('.form__submit-btn')
        this._buttonText = this._button.textContent;
    }

    getInputValues() {
        this._inputList = this._formSelector.querySelectorAll('.form__text');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this.getInputValues());
        })
    }

    close() {
        this._formSelector.reset();
        super.close();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = this._buttonText;
        }
    }
}