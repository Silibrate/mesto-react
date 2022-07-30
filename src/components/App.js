import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React, { useState } from 'react';
import Api from '../utils/api';
import Card from './Card';
import ImagePopup from './ImagePopup';



function App() {

  const config = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
      authorization: '470ad620-2a28-423a-83e5-333c76ae2cdf',
      'Content-Type': 'application/json'
    }
  }

  const api = new Api(config)

  const [profileInfo, setProfileInfo] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.UserInfo()
      .then((data) => {
        setProfileInfo(data)
      });

    api.getInitialCards()
      .then((data) => {
        setCards(data);

      })
  }, [])

  const [imageLink, setImageLink] = React.useState('');
  const [imageTitle, setImageTitle] = React.useState('');

  function handleImageClick(link, title) {
    setImageLink(link);
    setImageTitle(title);
  }
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

   const handlePhotoPopupClick=()=>{
     setSelectedCard(true)
   }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(false)
  }

  return (
    <div className="body">

      <Header></Header>

      <Main userName={profileInfo.name} userDescription={profileInfo.about} userAvatar={profileInfo.avatar} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}>
        <Card  imageWatch={handleImageClick} onCardClick={handlePhotoPopupClick} cards={cards}></Card>
      </Main>


      <Footer></Footer>

      <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} selectorSaveButton='popup__button-edit' selector='popup-edit' title='Редактировать профиль' close='popup__close_edit' subTitle='Сохранить'   >
        <>
          <input type="text" placeholder="Имя" className="popup__input popup__input-name " name="username" id="name"
            minLength="2" maxLength="40" required />
          <span className="error name-error" id="errorname"></span>
          <input type="text" placeholder="Деятельность"
            className="popup__input popup__input-name popup__input-name_type_user-job" id="job" name="userjob" minLength="2"
            maxLength="200" required />
          <span className="error job-error" id="errorjob"></span>
        </>
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} selectorSaveButton='popup__button_save_card' selector='popup-add' title='Добавить картинку' close='popup__close_add' subTitle='Сохранить'>
        <>
          <input type="text" placeholder="Название" className="popup__input popup__input-title popup__input-title_card "
            name="cardname" id="card-name" required minLength="2" maxLength="30" />
          <span className="error card-name-error" id="card-name-error"></span>
          <input type="url" placeholder="Ссылка на картинку"
            className="popup__input popup__input-title popup__input-title_type-link" id="link" name="photo" required />
          <span className="error link-error" id="card_title"></span>
        </>
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} selectorSaveButton='popup__button_save_avatar' selector='popup_avatar' title='Обновить аватар' close='popup__close_confirm' subTitle='Сохранить' >
        <input type="url" placeholder="Ссылка на картинку"
          className="popup__input popup__input-title popup__input-title_type-avatar" id="avatar" name="avatar" required />
        <span className="error avatar-error" id="avatar_title"></span>
      </PopupWithForm>

      <PopupWithForm selectorSaveButton='popup__button_delete_card' selector='popup_confirm' title='Вы уверены?' close='popup__close_confirm' subTitle='Да'  >
      </PopupWithForm>

      <ImagePopup imageTitle={imageTitle} imageLink={imageLink} isOpen={selectedCard} onClose={closeAllPopups} ></ImagePopup>

      <div className="popup popup_confirm">
        <div className="popup__container">
          <div className="popup__content">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form popup__form_create" name="create" noValidate>
              <button className="popup__close popup__close_confirm" type="button"></button>
              <button className="popup__button popup__button_delete_card" type="submit">Да</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
export default App;
