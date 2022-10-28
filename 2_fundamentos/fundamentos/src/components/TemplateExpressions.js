const TemplateExpressions = () => {
  const name = 'katia'
  const data = {
    age: 33,
    job: 'Programmer,',
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem? </h1>
      <p>Você atua como: {data.job}</p>
      <p>Qual a sua idade? {data.age}</p>
    </div>
  )
}

export default TemplateExpressions
