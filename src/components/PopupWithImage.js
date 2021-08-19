import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._name = this._popupElement.querySelector('.popup-place__name');
        this._link = this._popupElement.querySelector('.popup-place__image');
    }
    open(name, link) {
        super.open()
        this._link.src = link;
        this._link.alt = name;
        this._name.textContent = name;


    }
}