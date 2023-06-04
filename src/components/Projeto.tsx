import styles from '../app/styles/Projeto.module.css'

type props = {
    alt: string;
    src: string;
    description: string;
}

const Projeto = ({description, alt, src}:props) => {
    return(
        <div>
            <div className={styles.projetos}>
                <div className={styles.tudo}>
                    <img src={src} alt={alt} width={260} height={260}/>
                    <div className={styles.linha}>
                    </div>
                </div>
                <div className={styles.informacoes}>
                    <h3>
                        {description}
                    </h3>
                    <h2>
                        NextJs e ReactJs
                    </h2>
                    <p>
                        Exibe 251 Pokemons dinâmicamente...
                    </p>
                </div>
            
            </div>
           
        </div>
    )
}

export default Projeto