import styles from '../app/styles/Header.module.css'
import IconLinkedin from './icons/IconLinkedin'
import IconBxsDownArrow from './icons/iconSeta'
import TituloHeader from '@/components/TituloHeader'

const Header = () => {
    return(
        <header 
        className={styles.cabecalho}>
            <div className={styles.navegacao}>
                <button>
                    <IconLinkedin width={18} height={18}/>
                    <IconBxsDownArrow width={8} height={8}/>
                </button>
            
                <p>
                    DESENVOLVEDOR <br /> FRONT-END
                </p>
            </div>
            <TituloHeader/>   
        </header>
    )
}

export default Header