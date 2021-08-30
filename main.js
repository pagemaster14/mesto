!function(){"use strict";var e=document.querySelector(".edit-button"),t=document.querySelector(".add-button"),n=document.querySelector(".form_type_add"),r=document.querySelector(".form_type_edit"),o=document.querySelector(".form__text_type_name"),i=document.querySelector(".form__text_type_bio"),a=(document.querySelector(".form__text_type_place"),document.querySelector(".form__text_type_img"),document.querySelector(".item-template").content),u=document.querySelector(".cards"),c=document.querySelector(".popup_type_edit-profile"),s=document.querySelector(".popup_type_add"),l=document.querySelector(".popup-place"),f={formSelector:".form",inputSelector:".form__text",submitButtonSelector:".form__submit-btn",inactiveButtonClass:"form__submit-btn_inactive",inputErrorClass:".form__input-error",errorClass:"form__input-error_active",formSection:".form__section",formInputError:".form__input-error",invalidText:"form__text_invalid"};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._template=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getCard",value:function(){return this._newCard=this._template.querySelector(".card").cloneNode(!0),this._newCard}},{key:"renderCard",value:function(){return this._element=this._getCard(),this._cardName=this._newCard.querySelector(".card__name"),this._selectCard=this._newCard.querySelector(".card__image"),this._deleteButton=this._newCard.querySelector(".delete-button"),this._likeButton=this._newCard.querySelector(".like-button"),this._cardName.textContent=this._name,this._selectCard.src=this._link,this._selectCard.alt=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._deleteCard()})),this._likeButton.addEventListener("click",(function(){e._likeToggle()})),this._selectCard.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_likeToggle",value:function(){this._likeButton.classList.toggle("like-button_active")}},{key:"_deleteCard",value:function(){this._element.remove()}}])&&p(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formSection=t.formSection,this._formInputError=t.formInputError,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._invalidText=t.invalidText}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=e.closest(this._formSection),r=n.querySelector(this._inputErrorClass);r.textContent=t,r.classList.add(this._errorClass),n.querySelector(this._inputSelector).classList.add(this._invalidText)}},{key:"_hideInputError",value:function(e){var t=e.closest(this._formSection),n=t.querySelector(this._formInputError);n.textContent="",n.classList.remove(this._errorClass),t.querySelector(this._inputSelector).classList.remove(this._invalidText)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListenersValidate",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListenersValidate()}}])&&h(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._renderedItems=e,this._renderedItems.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup-close")&&e.close()}))}}])&&v(t.prototype,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._name=t._popupElement.querySelector(".popup-place__name"),t._link=t._popupElement.querySelector(".popup-place__image"),t}return t=a,(n=[{key:"open",value:function(e,t){k(C(a.prototype),"open",this).call(this),this._link.src=t,this._link.alt=e,this._name.textContent=e}}])&&S(t.prototype,n),a}(b);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._handleFormSubmit=t,r._formSelector=n,r}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._formSelector.querySelectorAll(".form__text"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;q(x(a.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._formSelector.reset(),q(x(a.prototype),"close",this).call(this)}}])&&j(t.prototype,n),a}(b);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.userNameSelector,r=t.userBioSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={},this._userData.name=this._profileName.textContent,this._userData.bio=this._profileJob.textContent,this._userData}},{key:"setUserInfo",value:function(e){e.fullname&&(this._profileName.textContent=e.fullname),e.job&&(this._profileJob.textContent=e.job)}}])&&T(t.prototype,n),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r={authorization:"a70aac99-3995-441f-a1d5-acc4588f1199","Content-Type":"application/json"},(n="headers")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.url=t.url}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{headers:{authorization:"a70aac99-3995-441f-a1d5-acc4588f1199"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"addNewCards",value:function(){}},{key:"deleteCards",value:function(){}},{key:"likeCards",value:function(){}}])&&V(t.prototype,n),e}();function N(e){return new _(e,a,J).renderCard()}var A=new d(f,r),U=new d(f,n);A.enableValidation(),U.enableValidation(),t.addEventListener("click",(function(){return F.open()}));var z=new L(l);function J(e,t){z.open(e,t)}z.setEventListeners();var F=new B(s,(function(e){var t=N(e);originalCardsList.addItemPrepend(t),F.close(),U.resetValidation()}),n);F.setEventListeners();var M=new R({userNameSelector:".profile-info__name",userBioSelector:".profile-info__bio"}),G=new B(c,(function(e){M.setUserInfo(e),G.close()}),r);G.setEventListeners(),e.addEventListener("click",(function(){G.open();var e=M.getUserInfo();o.value=e.name,i.value=e.bio,A.resetValidation()})),new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"a70aac99-3995-441f-a1d5-acc4588f1199","Content-Type":"application/json"}}).getInitialCards().then((function(e){var t=new m({renderer:function(e){var n=N(e);t.addItem(n)}},u);t.renderItems(e)}))}();