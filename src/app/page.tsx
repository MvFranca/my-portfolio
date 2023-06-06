"use client"

import styles from './page.module.css'
import Header from '../components/Header'
import Projetos from '@/components/Projetos'
import Habilidades from '@/components/Habilidades'
import Contato from '@/components/Contato'
import Sobre from '@/components/Sobre'
import MenuMobile from '@/components/menuMobile'
import Navbar from '@/components/Navbar'
import { useState } from 'react'


export default function Home() {
  const [stateMenu, setStateMenu] = useState(false)


  function abrirFechar(){
    setStateMenu(!stateMenu)
  }

  return (
    <>

    <Header/>
    <Projetos/>
    <Sobre/>
    <Habilidades/>
    <Contato/>
    <MenuMobile
    stateMenu = {stateMenu}
    />
    <Navbar 
    abrirFechar = {abrirFechar}
    />
    </>
  )
}
