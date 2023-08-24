import React  from "react";

import style from "../styles/card.module.css"

export default function Card() {

    return (
        <div className={style.card}>
            <section>
            <h3>Portal de Projetos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
            <button>Conhecer</button>
        </div>
    )
}