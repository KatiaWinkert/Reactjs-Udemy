import { useState } from 'react'

const ListeRender = () => {
  const [list] = useState(['Katia', 'Ana', 'Cindy'])

  const [users] = useState([
    {id:543486, name:"Kátia", age: 33},
    {id:354687, name: "Nino", age: 7},
    {id:356468, name: "Jheyni", age: 3},
  ])


  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user)=>(
            <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListeRender
