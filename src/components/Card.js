export class Card {
    constructor(data, template, handleCardClick, api, handleDeleteClick, userId) {
        this._name = data.name
        this._link = data.link
        this._template = template
        this._handleCardClick = handleCardClick
        this._api = api
        this._id = data._id
        this._userId = userId
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._handleDeleteClick = handleDeleteClick
    }

    _getCard() {
        this._newCard = this._template.querySelector('.card').cloneNode(true);

        return this._newCard
    }

    renderCard() {
        this._element = this._getCard()
        this._cardName = this._newCard.querySelector('.card__name')
        this._selectCard = this._newCard.querySelector('.card__image');

        this._likeButton = this._newCard.querySelector('.like-button');
        this._likeCounter = this._newCard.querySelector('.card__like-counter');
        this._deleteButton = this._newCard.querySelector('.delete-button');
        this._deleteButtonSubmit = document.querySelector('.form__submit-btn_type_delete');
        this._cardName.textContent = this._name;
        this._selectCard.src = this._link;
        this._selectCard.alt = this._name;
        this._likeCounter.textContent = `${this._likes.length}`;

        if (this._userId === this._ownerId) {
            this._deleteButton.style.display = 'block';
        }

        if (this._likes.find((like) => like._id === this._userId)) {
            this._likeButton.classList.add('like-button_active');
        }

        this._setEventListeners()

        return this._element
    }

    _setEventListeners() {
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick(this._id, this._element)
        });
        this._likeButton.addEventListener('click', () => {
            if (!this._likeButton.classList.contains('like-button_active')) {
                this._likeToggle();
                this._likeCard(this._id)
                    .then((data) => {
                        this._likeCounter.textContent = `${data.likes.length}`;
                    })
            } else {
                this._likeToggle();
                this._dislikeCard(this._id)
                    .then((data) => {
                        this._likeCounter.textContent = `${data.likes.length}`;
                    })
            }
        });
        this._selectCard.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }
    _likeToggle() {
        this._likeButton.classList.toggle('like-button_active')
    }

    _likeCard(id) {
        return this._api.putLike(id)
    }

    _dislikeCard(id) {
        return this._api.deleteLike(id)
    }

}