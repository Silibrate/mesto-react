import React from "react";


const Card = (props) => {
    return (
        <section className="cards" >
            {props.cards.map((item) => {
                return (
                    <div className="card" key={item._id}>
                        <button className="card__button_trash"></button>
                        <div onClick={ () => { props.imageWatch(item.link, item.name);props.onCardClick() }} className="card__image" style={{ backgroundImage: `url(${item.link})`, backgroundSize: 'cover' }} />
                        <div className="card__conteiner">
                            <h2 className="card__title">{item.name}</h2>
                            <div className="card__likes">
                                <button className="card__button card__button_type_like" type="submit"></button>
                                <p className="card__likes__statistics">{item.likes.length}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Card;