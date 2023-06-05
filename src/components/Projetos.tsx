"use client"

import { useEffect, useState } from 'react'
import styles from '../app/styles/Projetos.module.css'
import Projeto from './Projeto'
import IconGithub from './icons/iconGithub'
import { resolve } from 'path'



const Projetos = () => {
    const [projetos, setProjetos] = useState([])

    async function api() {
        await fetch('http://localhost:3000/dados/carrossel.json').then((response) => response.json()).then(setProjetos)
    }

    useEffect(() => {
        api()
    }, [])

    if (!projetos || !projetos.length) return null

    return (
        <section className={styles.fullProjects}>
            <h2 className={styles.titulo}>
                PROJETOS
            </h2>
            <div className={styles.projetos}>

                <div className={styles.carrossel}>
                    {
                        projetos.map(projeto => {
                            const { id, titulo, img, tecnologias, descricao } = projeto
                            return (
                                <Projeto
                                    src={img}
                                    alt={titulo}
                                    titulo={titulo}
                                    tecnologias={tecnologias}
                                    description={descricao}
                                    key={id}
                                />
                            )
                        })
                    }
                </div>
                            
                </div>
                <div className={styles.github}>
                    
                    <a href="#">
                    
                        <IconGithub width={20} height={20}/>
                    
                        Acesse meu Github
                    </a>
                </div>
            </section>
    )
}

export default Projetos