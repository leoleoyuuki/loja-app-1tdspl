import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
    <header className="bg-gray-800 text-white h-16">
          <nav className='flex justify-around '>
            <Link href="/produtos/estaticas/tenis">TENIS</Link>
            <Link href={"/produtos/dinamicas/estranho/tenis-preto"}>TENIS PRETO</Link>
            <Link href="/produtos/dinamicas/vestuario/camisa-xadrez">Camisa-X</Link>
          </nav>
        </header>
  )
}