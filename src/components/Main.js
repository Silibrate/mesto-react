import React from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  /* const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
  }, [])

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
  } */


  return (
    <main className="page">

      <section className="profile">
        <div className="profile__avatar-conteiner " onClick={props.onEditAvatar} >
          <img className="profile__image" src={`${currentUser.avatar}`} alt="Аватарка"></img>
        </div>

        <div className="profile__conteiner">
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button className="profile__button-full" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="cards" >
        {props.cards.map((cardData) => (
          <Card
            onCardDelete={props.onCardDelete}
            onCardLike={props.onCardLike}
            key={cardData._id}
            card={cardData}
            imageWatch={props.imageWatch}
            onCardClick={props.onCardClick}
          ></Card>
        ))}
      </section>

    </main>
  )
}
export default Main;