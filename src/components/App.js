import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React, { useEffect, useState } from 'react';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';



function App() {
  const [cardInfo, setCardInfo] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      });
  }, [])

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false)

  function handleImageClick(card) {
    setCardInfo(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleUpdateUser(user) {
    api.updateInfo(user)
      .then((info) => {
        setCurrentUser(info);
        closeAllPopups();
      })
  }

  function handleUpdateAvatar(avatarLink) {
    api.updateAvatar(avatarLink)
      .then((info) => {
        setCurrentUser(info)
        closeAllPopups();
      })
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handlePhotoPopupClick = () => {
    setSelectedCard(true)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(false)
  }

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
  }, [])

  function handleAddPlaceSubmit(card) {
    api.createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.likeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    } else {
      api.dislikeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((deleteCard) => {
        setCards((state) => state.filter((deleteCard) => deleteCard._id !== card._id));
      })
  }

  return (
    <div className="body">

      <Header />

      <CurrentUserContext.Provider value={currentUser}>
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          imageWatch={handleImageClick}
          onCardClick={handlePhotoPopupClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} />

        <Footer />

        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <AddPlacePopup onAddNewCard={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

        <PopupWithForm
          selectorSaveButton='popup__button_delete_card'
          selector='popup_confirm'
          title='Вы уверены?'
          close='popup__close_confirm'
          subTitle='Да'  >
        </PopupWithForm>

        <ImagePopup
          cardInfo={cardInfo}
          isOpen={selectedCard}
          onClose={closeAllPopups} >
        </ImagePopup>
      </CurrentUserContext.Provider>

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
