import styles from '../app/styles/TituloHeader.module.css'

const TituloHeader = () => {
    return(
            <>
            <section id={styles.movimento}>
                <h1 className={styles.titulo}>
                <span className={styles.titulos}>
                    <span id={styles.mv}>
                        MARCOS
                    </span >
                    <span id={styles.meu}>
                        DESENVOLVEDOR
                    </span>
                </span>
                <span className={styles.titulos}>
                    <span id={styles.franca}>VINICIUS</span>
                    <span  id={styles.portfolio}>FRONT-END</span>
                </span>
                </h1>
            </section>
            <section id={styles.estatico}>
                <h1>
                    <span>MARCOS VINICIUS</span><br />
                    <span className={styles.dev}>DESENVOLVEDOR FRONT-END</span>
                </h1>
            </section>
            </>
    )
}

export default TituloHeader