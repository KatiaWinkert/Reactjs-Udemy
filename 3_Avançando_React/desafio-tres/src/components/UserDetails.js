const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>idade: {age}</p>
      <p>Profissão: {job}</p>

      {age >= 18 ? (
        <p> Pode tirar a carteira de habilitação. </p>
      ) : (
        <p> Não dirigir é menor! </p>
      )}
    </div>
  )
}

export default UserDetails
