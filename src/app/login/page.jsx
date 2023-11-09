"use client";
import { useState } from "react";


export default function LoginUsers() {

    //criando um useState para armazenar o objeto do usuario preenchido no formulario , e que sera enviado para a base de dados de validacao (email e senha)
    const [usuario,setUsuario] = useState({
        info: "",
        email: "",
        senha: "",
    });

    //Criando uma funcao para capturar os dados do formulario e armazenar no useState
    const handleChange = (e) =>{

        const {name,value} = e.target;

        setUsuario({...usuario,[name]: value})
    }

    // preciso de uma funcao que submeta os dados do formulario para a base de dados realizando a validacao de email e senha
    const handleSubmit = async (e) => {
        
        e.preventDefault();

        const resposta = await fetch("http://localhost:3000/dados/base/base-users",{
            method: "POST",
            body: JSON.stringify(usuario),
        });

        const resultado = await resposta.json();

        if(resultado.status){
            window.location.href = "/";
        }else{
            alert("Usuario ou senha invalidos")
        }


        
    }



  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Identificação de Usuários</h1>
        <hr className="mb-4" />
        <div className="login-user">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-xl font-bold mb-4">Login</legend>
              <div className="mb-4">
                <label htmlFor="idEmail" className="block">Email</label>
                <input
                  type="email"
                  name="email"
                  id="idEmail"
                  placeholder="Digite o seu email"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={usuario.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="idSenha" className="block">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="idSenha"
                  placeholder="Digite sua senha"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={usuario.senha}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Entrar
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
