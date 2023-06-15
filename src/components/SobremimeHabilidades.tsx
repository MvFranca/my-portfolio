import Habilidades from "./Habilidades"
import Sobre from "./Sobre"
import styles from '../app/styles/habeSobre.module.css'
import { useEffect, useRef } from "react"


const SobremimHabilidades = () => {
    const img = useRef<HTMLImageElement>(null)

    function fixarImagem(){
        img.current!.style.position = 'fixed'
        img.current!.style.top = '0'
        img.current!.style.left = '0'
    }


    return(
        <>
        <div className={styles.container}>
            <img src="/minha-foto.jpeg" alt="foto minha, desenvolvedor." ref={img}/>
       
        <div className={styles.habeSobre}>
            <Habilidades/>
            <Sobre/>
        </div>
        </div>
        </>
    )
}
export default SobremimHabilidades