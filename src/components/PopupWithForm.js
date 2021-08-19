import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit, formSelector) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit
        this._formSelector = formSelector
    }

    _getInputValues() {
        this._inputList = this._formSelector.querySelectorAll('.form__text');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

    close() {
        this._formSelector.reset();
        super.close();
    }
}