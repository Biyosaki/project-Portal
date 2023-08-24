import React, { useEffect, useState } from "react";
import Header from "@/components/header.component";
import Card from "@/components/card.component"
import api from "@/services/api";


import style from "../styles/dashboard.module.css"

export default function Dashboard() {
    const [repositories, setRepositories] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('auth'))

        api.get(`/users/${user.login}/repos`).then((res) => {
            console.log(res.data);
            setRepositories(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])


    return (
        <main>
            <Header />
            <div className={style.content}>
                <h3>Repositórios</h3>
                <section className={style['container-grid']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </main>

    )
}