import { useState, useEffect } from "react"

interface UseAPIProps<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export function useAPI<T>(url: string): UseAPIProps<T> {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)

        if (!response.ok) {
          switch (response.status) {
            case 400:
              setError(`${response.statusText}: Missing or invalid request parameters.`)
              break
            case 403:
              setError(`${response.statusText}: Access to this resource is restricted.`)
              break
            case 404:
              setError(`${response.statusText}: Requested data is not available.`)
              break
            default:
              setError(`${response.statusText}: Unexpected error occurred.`)
          }
          return
        }

        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error(error)

        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError("An unknown error occurred!")
        }
      } finally {
        setLoading(false)

      }
    }

    fetchData()
  }, [])

  return { data, error, loading }
}
