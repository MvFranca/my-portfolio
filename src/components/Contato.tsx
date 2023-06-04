import styles from '../app/styles/Contato.module.css'

const Contato = () => {
    return(
        <section className={styles.contato}>
            <h2>CONTATO</h2>
            <form>
                <div className={styles.info}>
                    <div className={styles.inputs}>
                        <input type="text" name="name" className={styles.dados} placeholder='Nome'/>
                        <input type="email" name="email" className={styles.dados} placeholder='E-mail'/>
                    </div>
                    <div>
                        <input type="text" name="message" placeholder='Envie uma mensagem...' className={styles.message}/>
                    </div>
                </div>
                <button type="submit" className={styles.enviar}>Enviar</button>
            </form>
            <footer>
              <p>Marcos França © 2023 | Todos os direitos reservados</p>

            </footer>
        </section>
    )
}

export default Contato