export class Api {
    constructor(options) {
        this._url = options.baseUrl
        this._headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this._url}${'users/me'}`, {
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    getInitialCards() {
        return fetch(`${this._url}${'cards'}`, {
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))

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
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    deleteCard(id) {
        return fetch(`${this._url}${'cards/'}` + id, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    putLike(id) {
        return fetch(`${this._url}${'cards/likes/'}` + id, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    deleteLike(id) {
        return fetch(`${this._url}${'cards/likes/'}` + id, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }

    updateUserAvatar(avatar) {
        return fetch(`${this._url}${'users/me/avatar'}`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar.link
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => console.log(err))
    }
}