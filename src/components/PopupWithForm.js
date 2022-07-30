import React from "react";


const PopupWithForm = (props) => {
    return (
        <div className={`popup ${props.selector} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <div className="popup__content">
                    <h2 className="popup__title">{props.title}</h2>
                    <form className="popup__form popup__form_create" name={props.class} noValidate>
                        <button className={`popup__close ${props.close}`} type="button" onClick={props.onClose}></button>
                        {props.children}
                        <button className={`popup__button ${props.selectorSaveButton}`} type="submit">{props.subTitle}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;