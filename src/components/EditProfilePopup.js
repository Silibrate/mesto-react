import React, { useState } from "react";
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const userInfo = {
    username: name,
    userjob: description
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser,isOpen]);

  function heandleChangeName(e) {
    setName(e.target.value)
  }

  function heandleChangeAbout(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(userInfo);
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      selectorSaveButton='popup__button-edit'
      selector='popup-edit'
      title='Редактировать профиль'
      close='popup__close_edit'
      subTitle='Сохранить'   >

      <input type="text" placeholder="Имя" className="popup__input popup__input-name " name="username" id="name"
        minLength="2" maxLength="40" required value={name || ''} onChange={heandleChangeName} />
      <span className="error name-error" id="errorname"></span>
      <input type="text" placeholder="Деятельность"
        className="popup__input popup__input-name popup__input-name_type_user-job" id="job" name="userjob" minLength="2"
        maxLength="200" required value={description || ''} onChange={heandleChangeAbout} />
      <span className="error job-error" id="errorjob"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
