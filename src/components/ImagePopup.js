import React from "react";

const ImagePopup = (props) => {
    
    return (
        <div className={`popup popup_photo ${props.isOpen ? 'popup_opened':''}`}  >
            <div className="popup__container">
                <div className="popup__items">
                    <button className="popup__close popup__close_photo" type="button" onClick={props.onClose}></button>
                    <figure>
                        <img className="popup__image" src={`${props.cardInfo.link}`} alt="dd" />
                        <figcaption className="popup__image-title">{props.cardInfo.name}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default ImagePopup;