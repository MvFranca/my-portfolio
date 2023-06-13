"use client"

import { useEffect, useRef, useState } from 'react'
import styles from '../app/styles/MenuMobile.module.css'

type props = {
    stateMenu: boolean;
}

const MenuMobile = ({stateMenu}: props) => {
    const menu = useRef<HTMLElement>(null)
    
    useEffect(()=> {
        if(!stateMenu) menu.current!.style.marginTop = '100vh'
        else menu.current!.style.marginTop = '0'
    }, [stateMenu])

    return(
        <section className={styles.menuMobile} ref={menu}>
            <div className={styles.navegacao}>
                <h2>
                    DESENVOLVEDOR <br /> FRONT-END
                </h2>
            </div>
            <nav>
                <a href="#">INÍCIO</a>
                <a href="#">PROJETOS</a>
                <a href="#">SOBRE</a>
                <a href="#">CONTATO</a>
                <a href="#">LINKEDIN</a>
            </nav>
        </section>
    )
}

export default MenuMobile