import { Popup } from './Popup.js';

export class DeletePopup extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._deleteConfirmButton = this._popupElement.querySelector('.submit-btn_type_delete')
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    }


    setEventListeners() {
        super.setEventListeners();
        this._deleteConfirmButton.addEventListener('click', () => {
            this._handleSubmitCallback()
        })
    }

}