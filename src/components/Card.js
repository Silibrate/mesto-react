import React from "react";


const Card = (props) => {

  return (
    <div className="card" key={props.card._id}>
      <button className="card__button_trash"></button>
      <div onClick={() => { props.imageWatch(props.card); props.onCardClick() }} className="card__image" style={{ backgroundImage: `url(${props.card.link})`, backgroundSize: 'cover' }} />
      <div className="card__conteiner">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button className="card__button card__button_type_like" type="submit"></button>
          <p className="card__likes__statistics">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;