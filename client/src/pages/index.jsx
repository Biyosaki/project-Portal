import React, { useState } from "react"
import api from "@/services/api"
import { useRouter } from "next/router"

import style from "../styles/home.module.css"

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [alert, setAlert] = useState(false)

  const submitUser = async () => {
    if (user === '') {
      //return user error
      setAlert(true)
    } else {
      setAlert(false)

      //call api
      api.get(`/users/${user}`).then((res) => {
        localStorage.setItem('auth', JSON.stringify(res.data));
        router.push('/dashboard')
      }).catch((err) => {
        console.log(err)
        setAlert(true)
      }
      )
    }
  }


  return (
    <main className={style.container}>
      <div className={style.form} >
        <h2>Bem Vindo(a) ao Portal de Projetos!</h2>
        <p>Para começar, identifique-se com o seu username do Github para acessarmos os seus respositórios!</p>
        <input
          type="text"
          name="user-name"
          placeholder="Usuário GitHub"
          onChange={e => setUser(e.target.value)}
        />
        {alert ?
          <p className={style.alert}>Usuário não encontrado</p>
          : <></>
        }

        <button onClick={() => submitUser()}>
          Começar
        </button>
      </div>
    </main>
  )
}
