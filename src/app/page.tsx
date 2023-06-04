import styles from './page.module.css'
import Header from '../components/Header'
import Projetos from '@/components/Projetos'
import Habilidades from '@/components/Habilidades'
import Contato from '@/components/Contato'
import Sobre from '@/components/Sobre'


export default function Home() {
  return (
    <>
    <Header/>
    <Projetos/>
    <Sobre/>
    <Habilidades/>
    <Contato/>
    </>
  )
}
