export class UserInfo {
    constructor(userNameElement, userBioElement) {
        this._userNameElement = userNameElement
        this._userBioElement = userBioElement
        this._profileName = document.querySelector('.profile-info__name')
        this._profileJob = document.querySelector('.profile-info__bio')
    }
    getUserInfo() {
        this._userData = {};
        this._userData.name = this._profileName.textContent;
        this._userData.bio = this._profileJob.textContent;
        return this._userData;
    }
    setUserInfo(item) {
        this._userNameElement.textContent = item.value;
        this._userBioElement.textContent = item.value;
    }
}