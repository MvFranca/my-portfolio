"use client"

import { useEffect, useState } from 'react'
import styles from '../app/styles/Projetos.module.css'

import IconGithub from './icons/iconGithub'
import Carousel from 'react-elastic-carousel'
import Projeto from './Projeto'

const Projetos = () => {
    const breakPoints = [
        {width: 1, itemToShow: 1 },
        {width: 550, itemToShow: 2, itemToScroll: 2},
        {width: 768, itemToShow: 3},
        {width: 1200, itemToSho: 4},
    ]



    const [projetos, setProjetos] = useState([])
  

    async function api() {
        const api = await fetch('http://localhost:3000/dados/carrossel.json')
        const dados = await api.json()
        setProjetos(dados)
      /*  await fetch('http://localhost:3000/dados/carrossel.json').then((response) => response.json()).then(setProjetos) */
    }

    useEffect(() => {
        api()
    }, [])

    

    return (
        <div className={styles.fullProjects}>
            <h2 className={styles.titulo}>
                PROJETOS
            </h2>
            <div className={styles.projetos}>
                <Carousel isRTL breakPoints={breakPoints} className={styles.carrossel}>
                 {projetos.map(projeto => {
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
                        })}
                </Carousel>
            </div>
            <div className={styles.github}>
                    
                    <a href="#">
                    
                        <IconGithub width={20} height={20}/>
                    
                        Acesse meu Github
                    </a>
            </div>
        </div>
        /*<section className={styles.fullProjects}>
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
            </section> */
        
    )
}

export default Projetos