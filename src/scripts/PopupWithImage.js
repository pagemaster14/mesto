import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._name = document.querySelector('.popup-place__name');
        this._link = document.querySelector('.popup-place__image');
    }
    open(name, link) {
        super.open()
        this._link.src = link;
        this._link.alt = name;
        this._name.textContent = name;


    }
}