import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsGithub } from "react-icons/bs"
import { MdLogout } from "react-icons/md"

import style from "../styles/header.module.css"

export default function Header() {
    const router = useRouter()
    const [user, setUser] = useState()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('auth'))
        setUser(userData)
        console.log(user)
    }, [])

    const handleLogout = async () => {
        localStorage.clear()
        router.push('/')
    }

    return (
        <header className={style.header}>
            <BsGithub
                size={40}
                
            />

            {user ?
                <div className={style['header-profile']}>
                    <p>Olá, {user.name}</p>
                    <img src={user.avatar_url} alt="Imagem do Usuário" />
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