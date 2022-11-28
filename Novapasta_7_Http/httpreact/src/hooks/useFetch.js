import React, { useState, useEffect } from 'react'

// 4 - custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 5 Refatorando o POST
  const [config, setConfig] = useState(null) // configurar o post e cabeçalhos
  const [method, setMethod] = useState(null) // essa linha diz qaul metodo estarei usando Get ou Post
  const [callFetch, setCallFetch] = useState(false) // esse codigo serve para entrar

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                Headers: {
                    "Content-type": "application/json"
                }, 
                body: JSON.stringify(data)
            })
        }

    }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)

      const json = await res.json()

      setData(json)
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
      }
    }

    httpRequest()
  }, [config])

  return { data, httpConfig }
}
