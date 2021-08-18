export class Card {
    constructor(name, link, template, handleCardClick) {
        this._name = name
        this._link = link
        this._template = template
        this._handleCardClick = handleCardClick
    }

    _getCard() {
        this._newCard = this._template.querySelector('.card').cloneNode(true);

        return this._newCard
    }

    renderCard() {
        this._element = this._getCard()
        this._cardName = this._newCard.querySelector('.card__name')
        this._selectCard = this._newCard.querySelector('.card__image');
        this._deleteButton = this._newCard.querySelector('.delete-button');
        this._likeButton = this._newCard.querySelector('.like-button');

        this._cardName.textContent = this._name;
        this._selectCard.src = this._link;
        this._selectCard.alt = this._name;

        this._setEventListeners()

        return this._element
    }

    _setEventListeners() {
        this._deleteButton.addEventListener('click', () => {
            this._deleteCard();
        });
        this._likeButton.addEventListener('click', () => {
            this._likeToggle();
        });
        this._selectCard.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }
    _likeToggle() {
        this._likeButton.classList.toggle('like-button_active')
    }

    _deleteCard() {
        this._deleteButton.closest('.card').remove();
    }

}