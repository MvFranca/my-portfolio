"use client"

import { useRef, useState } from 'react'
import styles from '../app/styles/MenuMobile.module.css'

type props = {
    stateMenu: boolean;
}

const MenuMobile = ({stateMenu}: props) => {

    if(!stateMenu) return null

    return(
        <section className={styles.menuMobile}>
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