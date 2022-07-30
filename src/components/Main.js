import React from "react";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

function Main(props) {

    return (
        <main className="page">

            <section className="profile">
                <div className="profile__avatar-conteiner " onClick={props.onEditAvatar} >
                    <img className="profile__image" src={`${props.userAvatar}`} alt="Аватарка"></img>
                </div>

                <div className="profile__conteiner">
                    <div className="profile__info">
                        <h1 className="profile__title">{props.userName}</h1>
                        <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__subtitle">{props.userDescription}</p>
                    </div>
                    <button className="profile__button-full" onClick={props.onAddPlace}></button>
                </div>
            </section>

            {props.children}

        </main>
    )
}
export default Main;