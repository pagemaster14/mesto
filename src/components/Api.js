export class Api {
    constructor(options) {
        this._url = options.baseUrl
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}${'users/me'}`, {
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    updateUserInfo(newUserInfo) {
        return fetch(`${this._url}${'users/me'}`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: newUserInfo.fullname,
                    about: newUserInfo.job
                })
            })
            .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(`${this._url}${'cards'}`, {
                headers: this._headers,
            })
            .then(this._checkResponse)

    }

    addNewCard(data) {
        return fetch(`${this._url}${'cards'}`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(this._checkResponse)
    }

    deleteCard(id) {
        return fetch(`${this._url}${'cards/'}` + id, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    putLike(id) {
        return fetch(`${this._url}${'cards/likes/'}` + id, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    deleteLike(id) {
        return fetch(`${this._url}${'cards/likes/'}` + id, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    updateUserAvatar(avatar) {
        return fetch(`${this._url}${'users/me/avatar'}`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar.link
                })
            })
            .then(this._checkResponse)
    }
}