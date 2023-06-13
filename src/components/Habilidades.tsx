import { useEffect, useRef, useState } from 'react'
import styles from '../app/styles/Habilidades.module.css'
import IconHtml5 from './icons/iconHTML'

const Habilidades = () => {
    const habilidades = useRef<HTMLElement>(null)
    const [verMais, setVerMais ] = useState(false)
    const [maisMenos, setMaisMenos] = useState<string>('mais')
    const aumentar = () => setVerMais(!verMais)

    useEffect(()=>{
        if(verMais){
            habilidades.current!.style.height = 'max-content'
            
            setMaisMenos('menos')
            } else{
                habilidades.current!.style.height = '94vh'
            setMaisMenos('mais')
            }
    }, [verMais])

    return(
        <section className={styles.habilidades} ref={habilidades}>
            <button type="button" value="ver mais" className={styles.btn} onClick={aumentar} >Ver {maisMenos}</button>
            <h2>
                HABILIDADES
            </h2>
            <div className={styles.fullhab}> 
                
                <div className={styles.skill} >
               
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>HTML5</h3>
                    </div>
                    <div className={styles.descricao}>
                        HTML É UMA LINGUAGEM DE MARCAÇÃO.
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>CSS3</h3>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>JS</h3>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>REACT</h3>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>NEXT</h3>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>NODE</h3>
                    </div>
                </div>
                <div className={styles.skill}>
                    <div className={styles.nome}>
                        <IconHtml5 width={120} height={120}/>
                        <h3>EXPRESS</h3>
                    </div>
                </div>
            </div>
             
        </section>
    )
}

export default Habilidades