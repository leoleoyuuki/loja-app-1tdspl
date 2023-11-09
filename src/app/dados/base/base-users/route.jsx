import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

const handleLogin = async(email,senha)=>{
    //Recebendo o arquivo JSON
    const file = await fs.readFile(process.cwd() + "/src/app/dados/base/db.json", "utf8");

    //converter o arquivo para JSON para poder realizar o trabalho
    const dados = await JSON.parse(file);
    
    //Logica de validacao
    const user = await dados.usuarios.find((ObjUsuario)=>( ObjUsuario.email === email && ObjUsuario.senha === senha));
    
    return user;
        
}



export async function POST(request, response){


    // CAPTURAR O REQUEST E TRATAR OS DADOS:
    // Desestruturar o request.(Destructuring)
    const {info,email, senha} = await request.json();


    // Chamar a funvao de validacao
    const user = await handleLogin(email, senha);


    //Exercicio 
    //Crie Logica onde seja os dados que são enviados pelo insominia,
    //sejam comparados contra os dados da base JSON, caso seja validado,
    //a comparação se encerra e é retornado o status true,
    //caso contrario retorne o status de false

    //PLUS
    //Crie uma view para realizar esta validacao, com CSS/TAILWIND + icones[0,5 pt na GS]
    //GRUPO\

    //Estrutura para definir o tipo de requisicao
    switch(info){
        case "login": 
        
            if(user){
                return NextResponse.json({"status": true});
            }else{
                return NextResponse.json({"status": false});
            }
            case "cadastro":
                break;
            default:
                break;
    }


    // GERANDO UMA RSPOSTA : RESPONSE.
    return NextResponse.json({"status": false});
}