import styles from './page.module.css'
import Header from '../components/Header'
import Projetos from '@/components/Projetos'
import Habilidades from '@/components/Habilidades'
import Contato from '@/components/Contato'


export default function Home() {
  return (
    <>
    <Header/>
    <Projetos/>
    <Habilidades/>
    <Contato/>
    </>
  )
}
