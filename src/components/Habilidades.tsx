import styles from '../app/styles/Habilidades.module.css'
import IconHtml5 from './icons/iconHTML'

const Habilidades = () => {

    const descricao = () => {

    }

    return(
        <section className={styles.habilidades}>
            <h2>
                HABILIDADES
            </h2>
            <div>
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