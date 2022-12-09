import { useState, useEffect } from 'react'

// 4 - custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 5 Refatorando o POST
  const [config, setConfig] = useState(null) // configurar o post e cabeçalhos
  const [method, setMethod] = useState(null) // essa linha diz qaul metodo estarei usando Get ou Post
  const [callFetch, setCallFetch] = useState(false) // esse codigo serve para entrar

  // 6- loading
  const [loading, setLoading] = useState(false)

  // 7 - tratando erros
  const [error, setError] = useState(null)

  //8- desafio 6
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      setMethod('POST')
    } else if (method === 'DELETE') {
      setConfig({
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
      setMethod('DELETE')
      setItemId(data)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      //6 - loading
      setLoading(true)

      // try => tratamento de erros no post
      try {
        const res = await fetch(url)

        const json = await res.json()

        setData(json)
        setMethod(null)

        setError(null)
      } catch (error) {
        console.log(error.message)

        setError('Houve algum erro ao carregar dados')
      }
      setLoading(false)
    }
    fetchData()
  }, [url, callFetch])

  // 5 refatorando Post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        let fetchOptions = [url, config]

        const res = await fetch(...fetchOptions)

        const json = await res.json()

        setCallFetch(json)
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl, config)

        const json = await res.json()

        setCallFetch(json)
      }

      
    }

    httpRequest()
  }, [config, method, url, itemId])

   console.log(config)

  return { data, httpConfig, loading, error }
}
