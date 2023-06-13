

import styles from '../app/styles/Navbar.module.css'
import IconLinkedin from "./icons/IconLinkedin"
import IconGithub from "./icons/iconGithub"
import IconInstagram from "./icons/iconInstagram"
import IconContacts from "./icons/iconContact"
import IconMenu2Fill from './icons/IconMenuNavbar'
import IconTelegram from './icons/iconTelegram'

type props = {
    abrirFechar: () => void;
}

const Navbar = ({abrirFechar}: props) => {

    return(
        <nav className={styles.nav}>
            <section>
                <div>
                    <a href="#">
                        <IconLinkedin width={28} height={28} color="#fce373" className={styles.icons}/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <IconGithub width={30} height={30} className={styles.icons}/>
                    </a>
                </div>
                <button onClick={abrirFechar}>
                    <IconMenu2Fill width={40} height={40} className={styles.icons}/>
                </button>
                <div>
                    <a href="#">
                        <IconInstagram width={38} height={38} className={styles.icons}/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <IconContacts width={36} height={36} className={styles.icons}/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <IconTelegram  width={30} height={30} color="#fce373" className={styles.icons} id={styles.telegram}/>
                    </a>
                </div>
            </section>       
        </nav>
    )
}

export default Navbar