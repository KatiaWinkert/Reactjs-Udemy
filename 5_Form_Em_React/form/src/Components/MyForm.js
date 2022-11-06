import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
    //3-gerenciamento de dados 

    const [name, setName] = useState()
    const [email, setEmail] = useState()

        const handleName = (e) => {
            setName(e.target.value)
        }
console.log(name)
  return (
    <div>
      {/*1-Criação de Form - opção 1*/}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name " placeholder="Digite o seu nome." onChange={handleName} />
        </div>
        {/*2-Label envolvendo input- opção 2*/}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="Digite seu email." />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
