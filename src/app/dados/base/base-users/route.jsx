import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function POST(request, response){

    // RECEBENDO O ARQUIVO JSON.
    const file = await fs.readFile(process.cwd() + "/src/app/dados/base/db.json", "utf8");

    //CONVERTER O ARQUIVO PARA PODER REALIZAR O TRABALHO.
    const dados = await JSON.parse(file);

    // CAPTURAR O REQUEST E TRATAR OS DADOS:
    // const dadosDoRequest = await request.json();


    //Exercicio 
    //Crie Logica onde seja os dados que são enviados pelo insominia,
    //sejam comparados contra os dados da base JSON, caso seja validado,
    //a comparação se encerra e é retornado o status true,
    //caso contrario retorne o status de false

    //PLUS
    //Crie uma view para realizar esta validacao, com CSS/TAILWIND + icones[0,5 pt na GS]
    //GRUPO\

    console.log(dadosDoRequest)
    // GERANDO UMA RSPOSTA : RESPONSE.
    return NextResponse.json({"status": true});
}