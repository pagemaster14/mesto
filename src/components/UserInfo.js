export class UserInfo {
    constructor({ userNameSelector, userBioSelector }) {
        this._profileName = document.querySelector(userNameSelector)
        this._profileJob = document.querySelector(userBioSelector)
    }

    getUserInfo() {
        this._userData = {};
        this._userData.name = this._profileName.textContent;
        this._userData.bio = this._profileJob.textContent;
        return this._userData;
    }

    setUserInfo(item) {
        if (item.name) {
            this._profileName.textContent = item.name;
        }
        if (item.about) {
            this._profileJob.textContent = item.about;
        }
    }
}