import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit
        this._form = this._popupElement.querySelector('.form')
        this._inputList = this._form.querySelectorAll('.form__text');
        this._button = this._popupElement.querySelector('.form__submit-btn')
        this._buttonText = this._button.textContent;
    }

    getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this.getInputValues());
        })
    }

    close() {
        this._form.reset();
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