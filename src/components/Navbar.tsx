
import styles from '../app/styles/Navbar.module.css'
import IconLinkedin from "./icons/IconLinkedin"
import IconGithub from "./icons/iconGithub"
import IconInstagram from "./icons/iconInstagram"
import IconContacts from "./icons/iconContact"
import IconMenu2Fill from './icons/IconMenuNavbar'

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <section>
                <div>
                    <a href="#">
                        <IconLinkedin width={28} height={28} color="#fce373"/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <IconGithub width={30} height={30}/>
                    </a>
                </div>
                <button>
                    <IconMenu2Fill width={40} height={40}/>
                </button>
                <div>
                    <a href="#">
                        <IconInstagram width={38} height={38}/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <IconContacts width={36} height={36}/>
                    </a>
                </div>
            </section>       
        </nav>
    )
}

export default Navbar