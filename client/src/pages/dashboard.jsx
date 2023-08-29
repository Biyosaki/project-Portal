import React, { useEffect, useState } from "react";
import Header from "@/components/header.component";
import Card from "@/components/card.component"
import api from "@/services/api";
import { useRouter } from "next/router";

import style from "../styles/dashboard.module.css"

export default function Dashboard() {
    const router = useRouter()
    const [repositories, setRepositories] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('auth'))

        if (user) {
            api.get(`/users/${user.login}/repos`).then((res) => {
            console.log(res.data);
            setRepositories(res.data)
        }).catch((err) => {
            console.log(err)
        })
        } else {
            router.push('/')}
            
        },[])

        

   

    return (
        <main>
            <Header />
            <div className={style.content}>
                <section className={style['dashboard-panel']}>
                    <h3>Repositórios encontrados:</h3>
                </section>
                <section className={style['container-grid']}>
                    {repositories ? repositories.map((item) => (
                        <Card data={item} />
                    )) :
                        <div className={style['loader-container']}>
                            <article className={style['c-loader']} />
                        </div>}
                </section>

            </div>
        </main>

    )
}