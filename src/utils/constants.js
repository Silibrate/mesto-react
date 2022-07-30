export const formaRendLoad = {
  normal: 'Сохранение...',
  finally: 'Сохранить'
}
export const deleteRendLoad = {
  normal: 'удаление...',
  finally: 'да'
}
export const profileAvatarConteiner = document.querySelector('.profile__avatar-conteiner');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle')
export const profileButtonEdit = document.querySelector('.profile__button-edit');
export const profileButtonFull = document.querySelector('.profile__button-full');
export const popupCloseAdd = document.querySelector('.popup__close_add');
export const popupInputName = document.querySelector('.popup__input-name');
export const popupInputNameTypeUserJob = document.querySelector('.popup__input-name_type_user-job');
export const popupCloseEdit = document.querySelector('.popup__close-edit');
export const cards = document.querySelector('.cards');
export const selectorsValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-name_error',
};
export const createAvatarForm = document.forms.avatar;
export const editUserForm = document.forms.register;
export const createCardForm = document.forms.create;

export const ERRORS = {
  empty: 'Вы пропустили это поле',
  wrongUrl: 'Введите адрес сайта',
};
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
