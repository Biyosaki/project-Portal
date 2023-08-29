import React, { useEffect }  from "react";
import { useRouter } from "next/router";

import style from "../styles/card.module.css"


export default function Card({data}) {
// x existe ? <se existir> : <se nao existir/>

function validateCharacterDescription(desc) {
    const dataString = String(desc)
    var myArray = []
    var newDescription


    if (dataString.length >= 80) {
        for (let i = 0; i < 80; i++) {
            myArray.push(dataString[i])
        }
        myArray.push('...')
        newDescription = myArray.join('').toString()
    } else {
        newDescription = desc
    }

    return newDescription
}

const router = useRouter()
const specifications = async () => {
    router.push(`/specifications/${data.name}`)
}


function validateCharacterTitle(title) {
    const dataString = String(title)
    var myArray = []
    var newTitle

    if (dataString.length >= 20) {
        for (let i = 0; i < 20; i++) {
            myArray.push(dataString[i])
        }
        myArray.push('...')
        newTitle = myArray.join('').toString()
    } else {
        newTitle = title
    }

    return newTitle
}

    return (
        <div className={style.card}>
            <section className={style.content}>
            {data.name ?
                    <h4>{validateCharacterTitle(data.name)}</h4>
                    : <h4>Sem título</h4>
                }
                {data.description ?
                    <p>{validateCharacterDescription(data.description)}</p>
                    : <p>Sem Descrição</p>
                }
            </section>
            <button onClick={() => specifications()}>Conhecer</button>
        </div>
    )
}