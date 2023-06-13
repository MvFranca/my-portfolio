import styles from '../app/styles/Projeto.module.css'

type props = {
    alt: string;
    src: string;
    description: string;
    tecnologias: string;
    titulo: string;
}

const Projeto = ({description, alt, src, titulo, tecnologias}:props) => {
    return(
            <div className={styles.projetos}>
                <div className={styles.tudo}>
                    <img src={src} alt={alt} />
                </div>
                <div className={styles.informacoes}>
                    <h2>
                        {titulo}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>  
            </div>
    )
}

export default Projeto