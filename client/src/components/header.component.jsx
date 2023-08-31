import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/global/mode";

import { BsGithub } from "react-icons/bs"
import { MdDarkMode, MdLogout } from "react-icons/md"
import { GoSun} from "react-icons/go"
import { DiGithubFull} from "react-icons/di" 

import style from "../styles/header.module.css"

export default function Header() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [user, setUser] = useState()
    const mode = useSelector(state => state.mode)

  

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('auth'))
        setUser(userData)
    }, [])

    const handleMode = async () => {
        if (mode === 'light'){
            dispatch(setMode('dark'))
        }else {
            dispatch(setMode('light'))
        }
    }

    const handleLogout = async () => {
        localStorage.clear()
        router.push('/')
    }

    if ( mode === 'dark') {
        document.body.style = "background-color: #2b2b2b; color: #ffffff; transition: .4s"
    } else {
        document.body.style = "background-color: #ffffff; color: #000000; transition: .4s"
    }


    return (
        <header className={mode === 'light' ? style.header : style['header-dark']}>
            <section style={{ display: 'flex', alignItems: 'center' }}>
                <BsGithub
                    size={42}
                />
                <DiGithubFull
                    size={60}
                    style={{ marginLeft: '15px' }}
                />
            </section>

            {user ?
                <div className={style['header-profile']}>
                    <p>Perfil de {user.name}</p>
                    <img src={user.avatar_url} alt="Imagem do Usuário" />
                    {mode === 'light' ?
                        <MdDarkMode
                            onClick={() => handleMode()}
                            size={35}
                            style={{ marginRight: "25px", cursor: "pointer" }}
                        />
                        :
                        <GoSun
                            onClick={() => handleMode()}
                            size={35}
                            style={{ marginRight: "25px", cursor: "pointer" }}
                        />

                    }


                    <MdLogout
                        onClick={() => handleLogout()}
                        size={30}
                        className={style.icon}
                    />
                </div>
                : <></>

            }
        </header>
    )
}