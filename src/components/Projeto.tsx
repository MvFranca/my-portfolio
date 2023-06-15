import { useEffect, useRef } from 'react';
import styles from '../app/styles/Projeto.module.css'
import IconChevronBack from './icons/iconBack';
import IconCss3 from './icons/iconCss';
import IconHtml5 from './icons/iconHTML';
import IconBxsDownArrow from './icons/iconSeta';

type props = {
    alt: string;
    src: string;
    description: string;
    tecnologias: string;
    titulo: string;
    fecharTec: () => void;
    stateTec: boolean;
}



const Projeto = ({ description, alt, src, titulo, tecnologias, fecharTec, stateTec }: props) => {

    const menu = useRef<HTMLDivElement>(null)
    const icon = useRef<SVGSVGElement>(null)

    useEffect(()=> {
        if(!stateTec){
            menu.current!.style.marginLeft = '-152px'
            menu.current!.style.color = 'yellow'
        } else{
            menu.current!.style.marginLeft = '0'
            menu.current!.style.color = '#fff'
        }
    }, [stateTec])

    return (
        <section className={styles.projetoetec}>
            <div className={styles.tecnologias} ref={menu}>
                <IconChevronBack width={20} height={25} onClick={fecharTec} className={styles.voltar} ref={icon}/>
                <h1>Tecnologias</h1>
                <div className={styles.tec}>
                    <p>HTML5</p>
                    <IconHtml5 width={35} height={35} color='#fff'/>
                </div>
                <div className={styles.tec}>
                    <p>CSS3</p>
                     <IconCss3 width={25} height={25} color='#fff'/>
                </div>
                <div className={styles.tec}>
                    <p>CSS3</p>
                     <IconCss3 width={25} height={25} color='#fff'/>
                </div>
                <div className={styles.tec}>
                    <p>CSS3</p>
                     <IconCss3 width={25} height={25} color='#fff'/>
                </div>
                <div className={styles.tec}>
                    <p>CSS3</p>
                     <IconCss3 width={25} height={25} color='#fff'/>
                </div>
            </div>
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

        </section>


    )
}

export default Projeto