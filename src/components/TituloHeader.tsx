import styles from '../app/styles/TituloHeader.module.css'

const TituloHeader = () => {
    return(
        <h1 className={styles.titulo}>
            <span className={styles.titulos}>
                <span id={styles.mv}>
                    MARCOS
                </span >
                <span id={styles.meu}>
                    MEU
                </span>
            </span>
            <span className={styles.titulos}>
                <span id={styles.franca}>FRANÇA</span>
                <span  id={styles.portfolio}>PORTFÓLIO</span>
            </span>
        </h1>
    )
}

export default TituloHeader