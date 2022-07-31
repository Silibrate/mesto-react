import React from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {

  const [profileInfo, setProfileInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setProfileInfo(data)
      });

    api.getInitialCards()
      .then((data) => {
        setCards(data);

      })
  }, [])


  return (
    <main className="page">

      <section className="profile">
        <div className="profile__avatar-conteiner " onClick={props.onEditAvatar} >
          <img className="profile__image" src={`${profileInfo.avatar}`} alt="Аватарка"></img>
        </div>

        <div className="profile__conteiner">
          <div className="profile__info">
            <h1 className="profile__title">{profileInfo.name}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{profileInfo.about}</p>
          </div>
          <button className="profile__button-full" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="cards" >
        {cards.map((cardData) => (
          <Card
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