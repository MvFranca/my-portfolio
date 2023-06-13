import styles from '../app/styles/Sobre.module.css'

const Sobre = () => {
    return(
        <div className={styles.sobre}>
            <h2>SOBRE MIM</h2>
            <div className={styles.descricao}>
                    <p>
                        Olá, meu nome é Marcos França, tenho 18 anos e sou um apaixonado por tecnologia. Iniciei meus estudos em Desenvolvimento Web no início de 2022 e desde então me encantei pela área.
                    </p>
                    <br />
                    <p>
                        Atualmente, estou cursando Sistemas de Informação, no Instituto Federal de Alagoas e meu focado têm sido se tornar um desenvolvedor Fullstack.
                    </p>
            </div>
        </div>
    )
}

export default Sobre