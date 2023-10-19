import Link from 'next/link'


export default function Home() {
  return(
    <>
      <h1>HOME PAGE</h1>

      <div>
        <Link href="/produtos/estaticas/tenis">TENIS</Link> | 
        <Link href={"/produtos/dinamicas/estranho/tenis-azul"}>TENIS PRETO</Link> |
        <Link href="/produtos/dinamicas/vestuario/camisa-xadrez">Camisa-X</Link>
      </div>
    </>
  )
}
