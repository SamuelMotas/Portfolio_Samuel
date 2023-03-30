import "./FormStyles.css"

import React from 'react'

const Form = () => {
    return <div className="form">
        <form>
            <label>Votre Nom</label>
            <input className="text"></input>
            <label>Votre Email</label>
            <input className="text"></input>
            <label>Objet</label>
            <input className="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Ecrivez votre message ici" />
            <button className="btn">Envoyez</button>
        </form>
    </div>
}

export default Form