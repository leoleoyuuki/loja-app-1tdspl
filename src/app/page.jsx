import Link from 'next/link'


export default function Home() {
  return(
    <>
      <h1>HOME PAGE</h1>

      <div>
        <Link href="/produtos/tenis">TENIS</Link> | 
        <Link href={"/produtos/produto/tenis-preto"}>TENIS PRETO</Link> |
        <Link href="/produtos/produto/camisa-xadrez">Camisa-X</Link>
      </div>
    </>
  )
}
