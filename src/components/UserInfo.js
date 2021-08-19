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
        if (item.fullname) {
            this._profileName.textContent = item.fullname;
        }
        if (item.job) {
            this._profileJob.textContent = item.job;
        }
    }
}