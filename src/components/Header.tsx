import Link from 'next/link'
import styles from '../app/styles/Header.module.css'
import IconLinkedin from './icons/IconLinkedin'
import IconBxsDownArrow from './icons/iconSeta'
import TituloHeader from '@/components/TituloHeader'
import IconGithub from './icons/iconGithub'

const Header = () => {
    return(
        <header 
        className={styles.cabecalho}>
            <div className={styles.navegacao}>
                
                <nav>
                    <Link href={'#'}>
                        HOME
                    </Link>
                    <Link href={'#'}>
                        PROJETOS
                    </Link>
                   <div>
                       <p>
                            MEU 

                            <span>PORTFÓLIO</span>  
                        </p>
                   </div>
                
                <Link href={'#'}>
                        SOBRE
                    </Link>
                    <Link href={'#'}>
                        CONTATO
                    </Link>
           </nav> 
           </div>
           <div className={styles.github}>
                    <a href="#">
                    
                        <IconGithub width={20} height={20}/>
                    
                        Acesse meu Github
                    </a>
            </div>
            <TituloHeader/>   
        </header>
    )
}

export default Header