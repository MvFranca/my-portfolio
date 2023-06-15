"use client"

import styles from './page.module.css'
import Header from '../components/Header'
import Projetos from '@/components/Projetos'
import Habilidades from '@/components/Habilidades'
import Contato from '@/components/Contato'
import Sobre from '@/components/Sobre'
import MenuMobile from '@/components/menuMobile'
import Navbar from '@/components/Navbar'
import { useRef, useState } from 'react'
import SobremimHabilidades from '@/components/SobremimeHabilidades'


export default function Home() {
  const [stateMenu, setStateMenu] = useState(false)
  const tudo = useRef(null)

  function abrirFechar(){
    setStateMenu(!stateMenu)
  }

  

  return (
    <>
    <div ref={tudo}>
      <Header/>
      <Projetos/>
      <SobremimHabilidades
      
      />
      <Contato/>
      <MenuMobile
      stateMenu = {stateMenu}
      />
      <Navbar
      abrirFechar = {abrirFechar}
      />
    </div>
    </>
  )
}
