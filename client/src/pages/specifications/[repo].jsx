import React, { useEffect, useState } from "react";
import Header from "@/components/header.component";
import api from "@/services/api"
import { useRouter } from "next/router";

import style from "../../styles/repo.module.css"


export default function Repo() {
    const router = useRouter()
    const [repo, setRepo] = useState()


    const dashboard = async () => {
        router.push('/dashboard/')
    }

    useEffect(() => {
        //get user
        const user = JSON.parse(localStorage.getItem('auth'))
        const repoURL = window.location.pathname.replace('/specifications/', '')

        if (user) {
            api.get(`/repos/${user.login}/${repoURL}`).then((res) => {
                setRepo(res.data)
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })

        } else {
            router.push('/')
        }

    }, [])



    return (
        <main>
            <Header />
            {
                repo ?

                    <div className={style.content}>
                        <div className={style.desc}>

                            <h3><span className={style['span-weight']}>{repo.name}</span> </h3>

                            <p className={style.descricao}>{repo.description ?
                                repo.description : 'Sem descrição'

                            }</p>


                            <p><span className={style['span-weight']}>Linguagens Utilizadas: </span>
                                {repo.language ?
                                    repo.language : 'Nada informado'}</p>

                            <p><span className={style['span-weight']}>Repositório Privado:</span> {repo.private === true ? 'Sim' : 'Não'}</p>
                            <p><span className={style['span-weight']}>Data de Criação:</span> {repo.created_at}</p>
                            <p><span className={style['span-weight']}>Data da última atualização:</span> {repo.updated_at}</p>

                            <button
                                className={style['button-back']}
                                onClick={() => dashboard()}
                            >Voltar
                            </button>
                            <a
                                className={style['a-git']}
                                href={repo.svn_url}
                            >Acessar Repositório
                            </a>
                            
                            

                        </div>
                    </div>
                    :
                    <div className={style['loader-conatiner']}>
                        <article className={style['c-loader']} />
                    </div>
            }
        </main>
    )
}




