import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ onUpdateAvatar, onClose, isOpen }) => {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      selectorSaveButton='popup__button_save_avatar'
      selector='popup_avatar'
      title='Обновить аватар'
      close='popup__close_confirm'
      subTitle='Сохранить' >

      <input ref={avatarRef} type="url" placeholder="Ссылка на картинку"
        className="popup__input popup__input-title popup__input-title_type-avatar" id="avatar" name="avatar" required />
      <span className="error avatar-error" id="avatar_title"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;