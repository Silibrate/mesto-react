import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ onClose, isOpen, onAddNewCard }) => {
  const [link, setLink] = React.useState('');
  const [place, setPlace] = React.useState('');
  const newCard = {
    cardname: place,
    photo: link
  }

  function heandleChangePlace(e) {
    setPlace(e.target.value)
  }

  function heandleChangeLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddNewCard(newCard);
    e.target.reset();
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      selectorSaveButton='popup__button_save_card'
      selector='popup-add'
      title='Добавить картинку'
      close='popup__close_add'
      subTitle='Сохранить'>

      <>
        <input onChange={heandleChangePlace} type="text" placeholder="Название" className="popup__input popup__input-title popup__input-title_card "
          name="cardname" id="card-name" required minLength="2" maxLength="30" />
        <span className="error card-name-error" id="card-name-error"></span>
        <input onChange={heandleChangeLink} type="url" placeholder="Ссылка на картинку"
          className="popup__input popup__input-title popup__input-title_type-link" id="link" name="photo" required />
        <span className="error link-error" id="card_title"></span>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;