import styles from '../app/styles/Projetos.module.css'
import Projeto from './Projeto'

const Projetos = () => {
    return(
            <section className={styles.fullProjects}>
                <h2  className={styles.titulo}>
                    PROJETOS
                </h2>
                <div className={styles.projetos}>
                    <div className={styles.carrossel}>
                        <Projeto
                        src="/pokenext.png"
                        alt='Projeto Pokenext'
                        description='POKENEXT'
                        />
                 
                        <Projeto
                        src="/to-do-list.png"
                        alt='Projeto TODO-list'
                        description='TODO-LIST'
                        />
                    </div>
                </div>
            </section>
    )
}

export default Projetos