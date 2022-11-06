import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => { 
  //6 - controlled inputs
  //3-gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")

  const handleName = (e) => {
    setName(e.target.value)
  }
 
 //console.log(name)
 //console.log(email)

  const handleSubmit =(event) =>{
    event.preventDefault()
    console.log("enviando o formulario")
    console.log(name, email)
// 7 - limpar form 
// nesse passo é feito apos a validação 
// e o envia

    setName("")
    setEmail("")
  }

  return (
    
    <div>
      {/*5- Envio de Form*/}
      {/*1-Criação de Form - opção 1*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name "
            placeholder="Digite o seu nome."
            onChange={handleName}
            value={name}
          />
        </div>
        {/*2-Label envolvendo input- opção 2*/}
        <label>
          <span>E-mail</span>
          {/*4 - Simplificação de manupulação de state*/}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
