import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


const Card = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`${isOwn ? 'card__button_trash' : 'card__button_trash_hidden'}`);
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`${isLiked ? 'card__button_type_on' : 'card__button_type_like'}`);
  return (
    <div className="card" key={props.card._id}>
      <button onClick={() => { props.onCardDelete(props.card); console.log('s') }} className={`${cardDeleteButtonClassName}`}></button>
      <div onClick={() => { props.imageWatch(props.card); props.onCardClick() }} className="card__image" style={{ backgroundImage: `url(${props.card.link})`, backgroundSize: 'cover' }} />
      <div className="card__conteiner">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button onClick={() => { props.onCardLike(props.card) }} className={`card__button ${cardLikeButtonClassName}`} type="submit"></button>
          <p className="card__likes__statistics">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;