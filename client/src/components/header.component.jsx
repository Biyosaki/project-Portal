import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsGithub } from "react-icons/bs"
import { MdDarkMode, MdLogout } from "react-icons/md"
import { GoSun} from "react-icons/go"
import { DiGithubFull} from "react-icons/di" 

import style from "../styles/header.module.css"

export default function Header() {
    const router = useRouter()
    const [mode, setMode] = useState('light')
    const [user, setUser] = useState()

    useEffect(() => {
        const modeStorage = JSON.parse(localStorage.getItem('mode'))
        if (modeStorage){
            setMode(modeStorage)
        } else {
            setMode('light')
        }

        const userData = JSON.parse(localStorage.getItem('auth'))
        setUser(userData)
    }, [])

    const handleMode = async () => {
        if (mode === 'light'){
            localStorage.setItem('mode', JSON.stringify('dark'))
            setMode('dark')
        }else {
            localStorage.setItem('mode', JSON.stringify('light'))
            setMode('light')
        }
    }

    const handleLogout = async () => {
        localStorage.clear()
        router.push('/')
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